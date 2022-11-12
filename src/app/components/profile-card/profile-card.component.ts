import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, ViewChild, ElementRef } from '@angular/core'
import { trigger, transition, style, animate, state } from "@angular/animations"
import { ModalController, Platform } from '@ionic/angular'
import { ChatRoomComponent } from '@app/components/chatroom/chatroom.component'
import { ReportComponent } from '@app/components/report/report.component'
import { environment } from '@env/environment'

import { MessageRepository } from "@amityco/js-sdk"
import { AnimationOptions } from 'ngx-lottie'
import { AnimationItem } from 'lottie-web'
import { short } from "tiny-human-time"
import * as moment from 'moment'
declare var require: any;
const introJs = require('intro.js');


@Component({
  selector: 'div[app-profile-card]',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      state('false', style({ transform: 'translateY(400%)' })),
      state('true', style({ transform: 'translateY(0%)' })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('1000ms ease-in'))
    ]),
    trigger('bounce', [
      state('false', style({ left: 0 })),
      state('true', style({ left: '30px' })),
      transition('false => true', animate('1000ms ease')),
      transition('true => false', animate('1000ms ease'))
    ]),
    trigger('fade', [
      state('false', style({ opacity: 1 })),
      state('true', style({ opacity: 0 })),
      transition('false => true', animate('1000ms ease')),
      transition('true => false', animate('1000ms ease'))
    ]),
    trigger('fadeInverse', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('1000ms ease')),
      transition('true => false', animate('1000ms ease'))
    ]),
    trigger('fadeEnterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slowFadeEnterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class ProfileCardComponent implements OnInit {
  @Output() onLike = new EventEmitter();
  @Output() onPass = new EventEmitter();
  @Output() onLikeEnded = new EventEmitter();
  @Output() onReportUser = new EventEmitter();
  @Output() onTutorialComplete = new EventEmitter();
  @Input('profile') profile: any;
  @Input('like') like: any;
  @Input('user') user: any;
  @Input('isTutorial') isTutorial: any;
  @ViewChild("backOfCard", { read: ElementRef }) backOfCard: ElementRef;

  collection;
  gradients: any
  lastMessage = ''
  lastMessageTime = ''
  isCardFlipped = false
  slideImages = false
  isAndroid = false
  slideIndex = 0
  tutStep = null//intro,intro2,intro3,photoNext,photoBack,pass,like,flip
  disableDrag = false

  SLIDER_WIDTH = window.innerWidth - 110 - 45
  SLIDER_SCROLL_THRESHOLD = 100
  LIKE_ICON = '/assets/json/362-like.json'
  PASS_ICON_WHITE = '/assets/json/93573-close-white.json'
  PASS_ICON_BLACK = '/assets/json/93573-close-black.json'
  enterSlider = false
  isScrolling: any = false
  bounce = false
  enableBounce = false
  waitForBounce = false
  isLiking = false
  isCardScrollable = true

  sliderHelpIcon: AnimationItem;
  sliderLikeIcon: AnimationItem;
  sliderLikeIconOptions: AnimationOptions = {
    path: this.LIKE_ICON,
    autoplay: false,
    loop: false
  };
  sliderPassIconWhite: AnimationItem;
  sliderPassIconWhiteOptions: AnimationOptions = {
    path: this.PASS_ICON_WHITE,
    autoplay: false,
    loop: false
  };
  sliderPassIconBlack: AnimationItem;
  sliderPassIconBlackOptions: AnimationOptions = {
    path: this.PASS_ICON_BLACK,
    autoplay: false,
    loop: false
  };
  sliderOpacity = 0
  //cardDetailOpacity = 1
  sliderGlow = 0
  sliderButtonGlow = 0

  constructor(public platform: Platform, public modalCtrl: ModalController, private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) {
    this.gradients = environment.gradients;
    if (this.platform.is('android')) {
      this.isAndroid = true;
    }
  }

  sliderPassIconWhiteAnimated(animationItem: AnimationItem): void {
    this.sliderPassIconWhite = animationItem;
  }

  sliderPassIconBlackAnimated(animationItem: AnimationItem): void {
    this.sliderPassIconBlack = animationItem;
  }

  sliderLikeIconAnimated(animationItem: AnimationItem): void {
    this.sliderLikeIcon = animationItem;
  }

  sliderHelpIconAnimated(animationItem: AnimationItem): void {
    this.sliderHelpIcon = animationItem;
  }

  onPassClick() {
    if (this.tutorialStepCompleted('pass')) {
      if (this.isTutorial) {
        this.setTutStep('like')
      } else {
        setTimeout(() => {
          this.onPass.next()
        }, 450)
      }

      this.ngZone.runOutsideAngular(() => {
        if (this.isCardFlipped) {
          this.sliderPassIconBlack.playSegments([[0,14],[14,0]], true);
        } else {
          this.sliderPassIconWhite.playSegments([[0,14],[14,0]], true);
        }
      });
    }
  }

  sliderDragging(event: any) {
    if (event.distance) {
      this.sliderOpacity = 0.3 * (event.distance.x / this.SLIDER_WIDTH)
      this.sliderButtonGlow = 12 * (event.distance.x / this.SLIDER_WIDTH)
      //this.cardDetailOpacity = Math.max(1 - (3 * this.sliderOpacity), 0)
      /*
      setTimeout(() => {
        event['source']._dragRef._previewRect = null;
      })
      */
    }
  }

  drop(ev): void {
    let slider = ev.source._dragRef;
    const THUMB_RELIEF = 70;

    if (slider._activeTransform.x >= this.SLIDER_WIDTH - THUMB_RELIEF) {
      this.ngZone.runOutsideAngular(() => {
        this.sliderLikeIcon.playSegments([0,22], true)
      });

      if (!this.isTutorial) {
        //Keep sliderOpacity barely above 0 for 0.5s to leave time for "like" animation.
        //this.sliderOpacity = 0.00001
        this.sliderOpacity = 0.00001
        this.isLiking = true
        setTimeout(() => {
          this.isCardFlipped = false;
          this.onLike.next()
        }, 500)
      } else {
        this.sliderOpacity = 0;
        this.setTutStep('flip')
      }
    } else {
      this.sliderOpacity = 0
    }
    this.sliderButtonGlow = 0
    slider.reset();
  }

  tutorialStepCompleted(step) {
    return this.tutStep == null || this.tutStep == step
  }

  flip(){
    if (this.tutorialStepCompleted('flip')) {
      if (!this.slideImages) {
        this.isCardFlipped = !this.isCardFlipped
        this.enterSlider = false
      }
      if (this.isTutorial) {
        this.setTutStep('end')
      }
      this.changeDetectorRef.detectChanges();
    }

    if (!this.isProfilePreview()) {
      setTimeout(() => {
        if (this.backOfCard?.nativeElement.offsetHeight < this.backOfCard?.nativeElement.scrollHeight - this.SLIDER_SCROLL_THRESHOLD){
          this.isCardScrollable = true
        } else {
          this.isCardScrollable = false
        } 
        this.changeDetectorRef.detectChanges();  
      })
    }
  }

  slideImageTo(index) {
    if (this.tutorialStepCompleted(null)) {
      this.slideIndex = index
      this.slideImages = true
      setTimeout(() => {
        this.slideImages = false
      }, 100)
      this.changeDetectorRef.detectChanges();
    }
  }

  slideImageLeft(profile) {
    if (this.tutorialStepCompleted('photoBack')) {
      if (this.slideIndex > 0) {
        this.slideIndex--
      } else {
        this.slideIndex = profile.pictures.length-1;
      }
      this.slideImages = true
      setTimeout(() => {
        this.slideImages = false
      }, 100)

      if (this.isTutorial) {
        this.setTutStep('pass')
      }
      this.changeDetectorRef.detectChanges();
    }
  }

  slideImageRight(profile) {
    if (this.tutorialStepCompleted('photoNext')) {
      if (this.slideIndex+1 < profile.pictures?.length) {
        this.slideIndex++
      } else {
        this.slideIndex = 0;
      }
      this.slideImages = true
      setTimeout(() => {
        this.slideImages = false
      }, 100)

      if (this.isTutorial) {
        this.setTutStep('photoBack')
      }
      this.changeDetectorRef.detectChanges();
    }
  }

  setTutStep(step) {
    let photoNext = document.querySelector<HTMLElement>('.pictureRight');
    let photoBack = document.querySelector<HTMLElement>('.pictureLeft');
    let pass = document.querySelector<HTMLElement>('.example-box');
    let flip = document.querySelector<HTMLElement>('.cardz__face--front');

    if (photoNext) { photoNext.style.boxShadow = ''; }
    if (photoBack) { photoBack.style.boxShadow = ''; }
    if (pass) { pass.style.boxShadow = ''; }
    if (flip) { flip.style.boxShadow = ''; }
    this.disableDrag = true
    
    if (!step) {
      step = null
      this.disableDrag = false
      this.isCardFlipped = false
      this.onTutorialComplete.next()
    } else if (step == 'photoNext') {
      photoNext.style.boxShadow = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)';
    } else if (step == 'photoBack') {
      photoBack.style.boxShadow = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)';
    } else if (step == 'pass') {
      this.disableDrag = false
      pass.style.boxShadow = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .7)';
    } else if (step == 'like') {
      this.disableDrag = false
    } else if (step == 'flip') {
      flip.style.boxShadow = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)';
    }
    this.tutStep = step
  }

  async goForChat(event: any) {
    //Card flips when button is clicked, undo it
    setTimeout(() => this.flip())

    const modal = await this.modalCtrl.create({
      component: ChatRoomComponent,
      componentProps: {
        like: this.like.id,
        user: this.likeUser(this.like),
        otherUser: this.likeOther(this.like),
        amity_channel: this.like.amity_channel
      }
    });
    modal.onDidDismiss().then((data) => {
      //Remove card if convo was ended
      if (data['data']) {
        this.onLikeEnded.next()
      }
    });
    return await modal.present();
  }

  async openReportUser(event: any) {
    event.stopPropagation()

    const modal = await this.modalCtrl.create({
      component: ReportComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data['data']) {
        this.onReportUser.next({ like: this.like?.id, user: this.profile.id, reason: data['data'] })
      }
    });
    return await modal.present();
  }

  age() {
    return moment().diff(moment(this.profile?.birthday, 'YYYY-MM-DD'), 'years')
  }

  height() {
    if (this.user?.show_height_cm) {
      return Math.round(this.profile.height * 0.0254 *100) /100+ 'm'
    } else {
      return Math.floor(this.profile.height / 12) + "' " + Math.round(this.profile.height % 12) + '"'
    }
  }

  isProfilePreview() {
    if (this.user?.id == this.profile?.id) {
      return true
    }
    return !!this.like
  }

  isMatch() {
    return this.like && this.like.is_match ? true : false
  }

  showSlider() {
    return !this.isProfilePreview() && !this.isMatch()
  }

  //Get the active user from a like
  likeUser(like) {
    if (!like) {
      return ''
    }
    return like && like.is_user_liker ? like.liker : like.subject
  }

  //Get the other user from a like
  likeOther(like) {
    if (!like) {
      return '';
    }
    return like && like.is_user_liker ? like.subject : like.liker;
  }

  doBounce() {
    setTimeout(() => {
      if (this.enableBounce && this.sliderOpacity == 0) {
        this.bounce = true
        this.changeDetectorRef.detectChanges();
        this.endBounce(1000);
      } else {
        this.doBounce();
      }
    }, 10000);
  }

  endBounce(delay) {
    setTimeout(() => {
      if (this.enableBounce && this.sliderOpacity == 0) {
        this.bounce = false
        this.waitForBounce = true
        this.changeDetectorRef.detectChanges();

        setTimeout(() => {
          this.waitForBounce = false
          this.changeDetectorRef.detectChanges();
        }, 1000)

        this.doBounce();
      } else {
        this.endBounce(50);
      }
    }, delay)
  }

  onScroll(event: any) {
    if (this.isScrolling) {
      clearTimeout(this.isScrolling);
    }
    this.isScrolling = setTimeout(() => {
      this.isScrolling = false

      if (!this.isProfilePreview()) {
        this.enterSlider = event?.srcElement.scrollTop > this.SLIDER_SCROLL_THRESHOLD;
        this.changeDetectorRef.detectChanges();
      } 
    }, 50);
  }

  ngOnChanges() {
    if (this.like) {
      this.collection?.dispose();
      this.collection = MessageRepository.queryMessages({
        channelId: this.like.amity_channel
      });

      this.collection.on("dataUpdated", (_messages) => {
        this.ngZone.run(() => {
          let messages = this.collection.models;
          if (messages.length > 0) {
            const lastMessage = messages[messages.length-1]
            this.lastMessageTime = short(Date.now(), lastMessage.createdAt);

            if (lastMessage.type == 'text') {
              this.lastMessage = lastMessage.data?.text
            } else if (lastMessage.type == 'file') {
              this.lastMessage = 'Audio message'
            }
          }
          try {
            this.changeDetectorRef.detectChanges();
          } catch (e) {}
        });
      });
    }
  }

  ngOnDestroy() {
    this.enableBounce = false
  }

  ngOnInit() {
    if (this.isTutorial && this.tutStep == null) {
      this.tutStep = 'intro'
    }

    this.enterSlider = false
    this.enableBounce = true
    this.doBounce()
  }
}
