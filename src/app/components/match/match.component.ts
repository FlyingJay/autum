
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  like: any;
  verbList = ['Awesome',  'Amazing' , 'Congrats' , 'Yay' , 'Aww' , 'Lucky you', ];
  verb = '';

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    this.like = this.navParams.get('like');
  }

  goToChat() {
    this.modalCtrl.dismiss(true);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit () {
    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
  }

  updateWord () {
    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
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
}
