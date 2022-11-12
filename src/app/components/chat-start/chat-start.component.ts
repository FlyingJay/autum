import { Component, OnInit, ViewChild, Input } from '@angular/core'
import { IonContent, NavParams, ModalController } from '@ionic/angular'
import { PopoverController } from '@ionic/angular'
import { ShareProfileComponent } from '../share-profile/share-profile.component'
import { environment } from '@env/environment'
import { API } from '@app/services/api.service'

import * as amity from '@app/components/chatroom/client'
import * as moment from 'moment'
declare var require: any;
const introJs = require('intro.js');

@Component({
  selector: 'app-chat-start',
  templateUrl: './chat-start.component.html',
  styleUrls: ['./chat-start.component.scss']
})
export class ChatStartComponent implements OnInit {
  @Input('profile') profile: any;
  @ViewChild('IonContent', { static: true }) content: IonContent;

  data: {}[];
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };
  paramData: any;
  msgList: any;
  userName: any;
  user_input = '';
  User = '';
  toUser = '';
  start_typing: any;
  loader: boolean;
  matches = []
  show: boolean;
  footerJson: { 'icon': string; 'label': string; }[];
  gradients: any;
  like: any;

  messages = []
  constructor(public navParams: NavParams, public popCtrl: PopoverController, public modalCtrl: ModalController, private api: API) {
    this.data = [/*{
      'text': 'Thursday 31 January 2019',
    }*/];
    this.gradients = environment.gradients
    this.paramData = this.navParams.get('value');
    this.msgList = []

    setTimeout(this.tutorial, 1000);
    /*
    this.msgList = [
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:00',
        message: 'Hello, have you seen this great chat UI',
        id: 0,
        status: 'checkmark'
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: this.paramData ? this.paramData : '../../assets/chat/chat5.jpg',
        time: '12:03',
        message: 'Yeah, I see this. This looks great. ',
        id: 1,
        status: 'checkmark',
        name: 'Diana Nicole'

      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:05',
        message: '... and this is absolutely free, anyone can use',
        id: 3,
        status: 'done-all'
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: '../../assets/chat/chat5.jpg',
        time: '12:06',
        message: 'wow ! that\'s great. Love to see more of such chat themes',
        id: 4,
        status: 'checkmark',
        name: 'Diana Nicole'

      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:07',
        message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
        id: 5,
        status: 'done-all'
      }
    ];*/
    this.footerJson = [{
      'icon': 'images',
      'label': 'Image'
    }, {
      'icon': 'call',
      'label': 'Phone'
    }, {
      'icon': 'mail-unread',
      'label': 'Red'
    }, {
      'label': 'Document',
      'icon': 'radio-button-on'
    }, {
      'icon': 'pin',
      'label': 'Position'
    }, {
      'icon': 'videocam',
      'label': 'Video'
    },];
  }

  ngOnInit() {
    this.loadData()
  }

  typeSelected(type: any) {
    if (this.user_input === '' && type.icon === 'images') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        image: '../../assets/chat/chat3.jpg',
        id: this.msgList.length + 1,
        status: 'checkmark'
      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.user_input === '' && type.icon === 'videocam') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        video: '../../assets/chat/video.mp4',
        id: this.msgList.length + 1,
        status: 'checkmark'
      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.user_input === '' && type.icon === 'pin') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        map: { lat: 52.678418, lng: 7.809007 },
        id: this.msgList.length + 1,
        status: 'checkmark'
      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    }
  }

  loadData() {
    this.User = localStorage.getItem('user')
    if (this.navParams.get('like')) {
      this.api.like((like) => {
        this.like = like

        if (!like.amity_channel) {
          //Create an Amity chat room for the conversation
          amity.createChannel(like.id, like.liker.id, like.subject.id)
        }
      }, this.navParams.get('like'))

      this.api.likeMessages((messages) => {
        messages.forEach(message => {
          if (localStorage.getItem('user') != ""+message.profile.id) {
            this.toUser = message.profile.id
          }
        })

        this.msgList = messages.map(message => {
          return {
            userId: message.profile.id,
            userName: message.profile.first_name,
            userAvatar: message.profile.profile_picture_url,
            time: moment(message.created_at).format('MMM DD, h:m A'),
            message: message.message,
            id: message.id,
            status: 'done-all'
          }
        })
      }, this.navParams.get('like'))
    }
  }

  likeOther(like) {
    if (!like) {
      return ''
    }
    return like && like.is_user_liker ? like.subject : like.liker
  }

  toggleList(item: any) {
    this.show = !this.show;
    this.scrollDown();
  }

  sendMsg() {
    this.api.messageCreate(() => {
      this.loadData()
      this.user_input = ''
    }, {
      profile: +localStorage.getItem('user'),
      match: this.like.id,
      message: this.user_input
    })
    /*
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: this.paramData ? this.paramData : '../../assets/chat/chat5.jpg',
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        status: 'checkmark'

      });
      this.user_input = '';
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    }
    this.show = false;
    */
  }

  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: '../../assets/chat/chat5.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please',
        status: 'checkmark',
        name: 'Diana Nicole'
      });
      this.loader = false;
      this.scrollDown();
    }, 2000);
    this.scrollDown();
  }

  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 200);
  }

  something($event: any) {
    $event.preventDefault();
  }

  userTyping(event: any) {
    this.show = false;
    this.start_typing = event.target.value;
    this.scrollDown();
  }

  focusFunction(event: any) {
    this.show = false;
  }

  async popoverOpen(ev: any) {
    const popover = await this.popCtrl.create({
      component: ShareProfileComponent,
      componentProps: { like: this.navParams.get('like') },
      translucent: true,
      event: ev,
      mode: 'md'
    });

    popover.onDidDismiss().then((data) => {
      //Remove card if convo was ended
      if (data['data']) {
        this.modalCtrl.dismiss(true);
      }
    });

    return await popover.present();
  }

  closeModal() {
    this.modalCtrl.dismiss(false);
  }

  tutorial(){

   if (true) {
          introJs().setOptions({
          disableInteraction: true,
          showProgress: false,

           steps: [
               {
                  element: document.querySelector('.cardInfoDiv'),
                  intro: 'No chemistry? End a conversation  <img src="assets/images/chem.gif" style="margin-top:15px;height:auto;max-width:60%;margin-left: auto; margin-right: auto;display:grid">'
               },
           ]
         }).start();
       }

  }
}

