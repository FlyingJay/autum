import { Component, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy, OnInit, NgZone, ChangeDetectorRef  } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { Router } from '@angular/router';
import { IonContent, Platform, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Appsflyer } from '@ionic-native/appsflyer/ngx';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import * as moment from 'moment';
import * as helpers from './helpers'

import { API } from '@app/services/api.service';
import { environment } from '@env/environment';

import { AnimationType, scaleIn, scaleOut, fadeIn, fadeOut, jackIn, jackOut } from "./carousel/carousel.animations";
import { CarouselComponent } from "./carousel/carousel.component";
import { MatchComponent } from '@app/components/match/match.component';
import * as amity from '@app/components/chatroom/client'

declare var FCM: any;
declare var require: any;
const introJs = require('intro.js');


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),
      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('IonContent', { static: true }) content: IonContent;
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  leafIcon: AnimationItem;
  leafIconOptions: AnimationOptions = { path:'/assets/json/leaf.json', autoplay: true, loop: false };
  // settingsIcon: AnimationItem;
  // settingsIconOptions: AnimationOptions = { path:'/assets/json/settings.json', autoplay: false, loop: false };

  user: any;
  likes: Array<any> = [];
  segmentButton: any = 'flame';

  stack: any;//TODO: Remove
  cards: Array<any> = [];
  cardsRendered: Array<any> = [];
  swiped_profiles: Array<Number> = []
  outOfCards: boolean = false;

  stackAnimation = AnimationType.JackInTheBox;
  currentSlide = 0;

  isLoading = false;
  isSubloading = false;
  isLikeLoading = false;
  isCardTutorial = false;
  isAndroid: boolean = false;
  backbutton: any;
  verbList = ['We love that for you!', ' Make a move!', 'Are you down?'];
  verb = '';
  //Network Related Variables
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;
  loaderButton: boolean = false;
  loaderCrescent: boolean = false;

  RENDERED_CARDS = 5;
  PROFILES_PAGE_SIZE = 50;

  constructor(public api:API, public geolocation: Geolocation, public platform: Platform, public modalCtrl: ModalController, private statusBar: StatusBar, public route: Router, private appsflyer: Appsflyer, private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) {
    // Controls the status Bar
    if (this.platform.is('android')) {
      this.statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
      this.isAndroid = true;
    }

    if (this.platform.is('ios')) {
      this.statusBar.styleDefault();
    }
  }

  leafIconAnimated(animationItem: AnimationItem): void {
    this.leafIcon = animationItem;
  }

  // settingsIconAnimated(animationItem: AnimationItem): void {
  //   animationItem.setSpeed(1.5)
  //   this.settingsIcon = animationItem;
  // }

  loadData() {
    this.isLoading = true;
    this.checkNetworkStatus();

    this.api.me((user) => {
      this.user = user
      //Check if user is in an Autum Zone & unhide deck
      if (!user.location || user.hide_swipedeck) {
        this.checkLocation()
      }

      this.api.likesMatches((data) => {
        this.likes = data
      })
      //Get Amity user if needed
      if (!amity.currentUserId) {
        amity.connectClient(""+this.user.id)
      }
      //Get Firebase token if needed
      if (typeof FCM !== 'undefined') {
        this.refreshFirebase()
      }
    });

    if (this.segmentButton == 'flame') {
      this.cards = []
      this.currentSlide = 0
      this.api.profilesSwipeable(profiles => {
        this.addCards(profiles)
        this.isLoading = false;

        if (!this.user.hide_tutorial_swiping && !this.user.hide_swipedeck && profiles?.length > 0) {
          this.isCardTutorial = true
        }
      })
    } else {
      this.isLoading = false;
    }

    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
  }

  checkLocation() {
    //Dummy one, which will result in a working next statement.
    navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
    navigator.geolocation.getCurrentPosition((position) => { }, (e) => {}, {
      enableHighAccuracy: true
    });

    this.geolocation.getCurrentPosition().then((data) => {
      if (data['coords']?.longitude) {
        this.api.profileUpdate((user) => {
            this.user.location = user.location
            this.user.hide_swipedeck = user.hide_swipedeck

            if (!user.hide_tutorial_swiping && !user.hide_swipedeck) {
              location.reload()
            }
          },
          localStorage.getItem('user'),
          { location: `POINT(${data['coords']['longitude']} ${data['coords']['latitude']})` })
      }
    }).catch((error) => {
      console.log('Error getting location', error);
      this.loadData()
    });
  }

  addCards(profiles) {
    this.outOfCards = (profiles.length < this.PROFILES_PAGE_SIZE)

    let currentIds = this.cards.map(profile => profile?.id)
    let newProfiles = profiles.filter(profile => currentIds.indexOf(profile.id) == -1)
    newProfiles = newProfiles.filter(profile => this.swiped_profiles.indexOf(profile.id) == -1)

    this.cards = [...this.cards, ...newProfiles]
    this.changeDetectorRef.detectChanges();
  }

  nextCard(is_pass=false) {
    let profile = this.cards[this.currentSlide]?.id
    this.swiped_profiles.push(profile.id)
    if (is_pass) {
      this.api.profileSwipeLeft(() => {}, profile)
    } else {
      //Prevent concurrent likes
      if (!this.isLikeLoading) {
        this.isLikeLoading = true
        this.api.profileSwipeRight((like) => {
          if (like.is_match) {
            this.showMatch(like);
            this.user.remaining_likes_count -= 1

            //Create an Amity chat room for the conversation
            amity.createChannel(like.id, like.liker.id, like.subject.id)

            //Show tutorial if match limit reached
            if (this.user.remaining_likes_count < 1 && !this.user.hide_tutorial_matchlimit) {
              setTimeout(this.tutorialMessageFull.bind(this), 1500)
            }
          }
          this.isLikeLoading = false;
        }, profile)
      } else {
        this.isLikeLoading = false
      }
    }

    //Add more cards if there are less than 10 remaining
    if (this.currentSlide % 5 == 0 && !this.isSubloading && !this.outOfCards) {
      this.isSubloading = true
      this.api.profilesSwipeable(profiles => {
        this.addCards(profiles)
        this.isSubloading = false;
      })
    }

    this.stackAnimation = is_pass ? AnimationType.Fade : AnimationType.Scale;
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.cards.length ? 0 : next;
    this.changeDetectorRef.detectChanges();
  }

  async showMatch(like) {
    const modal = await this.modalCtrl.create({
      component: MatchComponent,
      componentProps: {
        like: like
      }
    });
    modal.onDidDismiss().then((data) => {
      //Go to matches if user wants to message
      if (data['data']) {
        this.updateSegmentButton('chatbubbles')
      }
    });
    return await modal.present();
  }

  onReportUser(args: any){
    this.swiped_profiles.push(args.user)

    this.api.profileSwipeLeft((like) => {
      this.api.likeUpdate(() => {
        this.loadData()
      },
      like?.id,
      { is_ended: true,
        is_ended_by: localStorage.getItem('user'),
        is_ended_reason: args.reason })
    }, args.user)
    //Card cleanup & load more
    //this.onSwiped(event)
  }

  //Get the other user from a like 
  likeOther(like) {
    if (!like) {
        return '';
    }
    return like && like.is_user_liker ? like.subject : like.liker;
  }

  resetLikes() {
    this.api.profileClearLikes(() => {
      this.loadData()
    })
  }

  playSegmentButtonAnimation(tab: string) {
    this.ngZone.runOutsideAngular(() => {
      if (tab == 'flame') {
        this.leafIcon.playSegments([[0,28],[0,28]], true)
      }
    });
  }

  updateSegmentButton(tab){
    this.playSegmentButtonAnimation(tab)
    if (!this.isLoading && this.segmentButton != tab){
      this.segmentButton = tab
      this.loadData()
    }
  }

  tutorialComplete() {
    this.api.profileUpdate(() => {
      this.isCardTutorial = false;
    }, localStorage.getItem('user'), { hide_tutorial_swiping: true })
    
  }

  // MATCHES ARE FULL TUTORIAL //
  tutorialMessageFull(){
    const _this = this
    introJs().setOptions({
      disableInteraction: true,
      showProgress: false,
      exitOnOverlayClick: false,
      exitOnEsc: false,
      hidePrev: true,
      steps: [{
          element: document.querySelector('.cardInfoDiv'),
          intro: 'That&#39;s exciting! You have three people waiting to meet you. <img src="assets/images/three.gif"style="height:auto;max-width:70%;margin-left: auto; margin-right: auto;display:grid"> '
        },{
          element: document.querySelector('.cardInfoDiv'),
          intro: 'Autum puts a spotlight on three people at a time so that you&#39;re not overwhelmed by too many choices.<img src="assets/images/choice.gif"style="height:auto;max-width:70%;margin-left: auto; margin-right: auto;display:grid"> '
        },{
          element: document.querySelector('.cardInfoDiv'),
          intro: 'This actually increases your chance of meeting someone face to face by 1000%  <br><br> <img src="assets/images/wow.gif"style="height:auto;max-width:50%;margin-left: auto; margin-right: auto;display:grid">'
        },{
          element: document.querySelector('.cardInfoDiv'),
          intro: 'Yeah, that&#39;s not a typo.<br> <br> We mean 1000%! <br> According to studies from Stanford and Columbia universities.<br><br>  <img src="assets/images/studies.gif"style="height:auto;max-width:50%;margin-left: auto; margin-right: auto;display:grid">'
        },{
          element: document.querySelector('.cardInfoDiv'),
          intro: 'Don&#39;t worry you&#39;re not limited in any way. <br> <br> Simply end a conversation to put a spotlight on someone new! <img src="assets/images/new.gif"style="height:auto;max-width:60%;margin-left: auto; margin-right: auto;display:grid">'
      }]
    }).oncomplete(function() {
      _this.api.profileUpdate(() => {}, localStorage.getItem('user'), { hide_tutorial_matchlimit: true })
    }).start();
  }

  refreshNetwork() {
    this.route.navigate(['home']);
    this.loadData();
    this.loaderButton = true
    setTimeout(() => {
      this.loaderButton = false;
    }, 1500 );
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        this.networkStatus = status;
        if(!this.networkStatus)
        this.loaderButton = false;
      });
  }

  async refreshFirebase() {
    const wasPermissionGiven: boolean = await FCM.requestPushPermission({
      ios9Support: {
        timeout: 10,  // How long it will wait for a decision from the user before returning `false`
        interval: 0.3 // How long between each permission verification
      }
    })
    if (wasPermissionGiven) {
      const fcmToken: string = await FCM.getToken()
      this.api.profileUpdate((user) => {},
      localStorage.getItem('user'),
      { firebase_token: fcmToken })
    }
  }

  ionViewWillLeave() {
    this.platform.backButton.observers.push(this.backbutton);
  }

  ionViewDidEnter() {
    //Disable Home Button on Android
    this.backbutton = this.platform.backButton.observers.pop();
    //First play of leaf icon animation
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => this.segmentButton == 'flame' ? this.leafIcon.playSegments([[0,28],[0,28]], true) : null)
     });
  }

  ionViewWillEnter() {

  }
  
  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }

  ngOnChanges () {
    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
  }

  ngAfterViewInit() {
    this.loadData()
  };

  ngOnInit(): void {
    this.checkNetworkStatus();
  }
}
