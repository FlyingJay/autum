import { Component, OnInit, EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { EndConvoComponent } from '../end-convo/end-convo.component';
import { PopoverController } from '@ionic/angular';
import { TinderIconsComponent } from '@app/components/tinder-icons/tinder-icons.component';
import { EditPageComponent } from '../edit/edit.component';

import * as moment from 'moment';
declare var require: any;
const introJs = require('intro.js');


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Output() navigateToDeck = new EventEmitter();
  @Output() navigateToEdit = new EventEmitter();
   @Input('user') user: any;
  slideOpts = {
     initialSlide: 0,
     speed: 280,
     slidesPerView: 1,
     spaceBetween: 10,
     threshold:0,
     noSwipingSelector:'ion-chip',
     noSwiping:true,
     centeredSlides: true
  };
  chatData: any;
  segmentTab: any;
  buttonClicked: boolean;
  clickData: any;
  imageData: any;
  matches = []
  modalStarData: any;
  isLoading = false;
  segmentButton: any = 'person';

  constructor(public popCtrl: PopoverController, public route: Router, public modalCtrl: ModalController, public service: DataService, public api: API) {
    this.chatData = environment.chatData;
    this.clickData = environment.menuDropdown;
    this.imageData = environment.newMatchImages;
    this.modalStarData = environment.star;
  }

  gotoEdit() {
    this.service.openModal(EditPageComponent, '');
  }

  loadData() {
    this.isLoading = true;
    this.api.likesMatches((data) => {
      this.matches = data
      this.isLoading = false

      if (data.length > 0) {
        const user = this.likeUser(data[0])

        if (!user.hide_tutorial_matches) {
          setTimeout(this.tutMessagePage.bind(this), 1000)
        }
      }
    })
  }

  goToPage(page) {
    this.route.navigate([page]);
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
      return ''
    }
    return like && like.is_user_liker ? like.subject : like.liker
  }

  selectSlot(index) {
    if (index > 2) {
      this.service.openModal(TinderIconsComponent, this.modalStarData, 'modalBackground');
    }
  }

  ngOnInit() {
    this.loadData()
  }

  changeClick() {
    this.buttonClicked = !this.buttonClicked;
  }

  changeSelected() {
    setTimeout(() => {
      this.buttonClicked = false;
    }, 500);
  }

  onReportUser(args: any){
    this.api.likeUpdate(() => {
      this.loadData()
    },
    args.like,
    { is_ended: true,
      is_ended_by: localStorage.getItem('user'),
      is_ended_reason: args.reason })
  }

  goToToDeck() {
    this.navigateToDeck.next()
  }

  goToToEdit() {
    this.navigateToEdit.next()
  }

  //---------MESSAGES MATCHES TUTORIAL------//
  tutMessagePage(){
    const _this = this

    introJs().setOptions({
      disableInteraction: true,
      showProgress: false,
      exitOnOverlayClick: false,
      exitOnEsc: false,
      hidePrev: true,
      steps: [{
       element: document.querySelector('.input-wrapper'),
       intro: 'Excited to meet someone new? <br> <br> Swipe left or right to cycle through your potential dates. <br> <br>  <img src="assets/images/swipe.gif"style="height:auto;max-width:60%;margin-left: auto; margin-right: auto;display:grid">'
      },{
       element: document.querySelector('.chatbox'),
       intro: 'Tap at the bottom to send a message!  <img src="assets/images/message.gif"style="height:auto;max-width:60%;margin-left: auto; margin-right: auto;display:grid">'
      }]
    }).oncomplete(function() {
      _this.api.profileUpdate(() => {}, localStorage.getItem('user'), { hide_tutorial_matches: true })
    }).start();
  }
}
