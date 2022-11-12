import { Component, Input, NgZone, ChangeDetectorRef } from "@angular/core";
import { ChannelRepository } from "@amityco/js-sdk";

import { NavParams, ModalController, PopoverController } from '@ionic/angular';
import { ShareProfileComponent } from '@app/components/share-profile/share-profile.component';

import { API } from '@app/services/api.service';

declare var require: any;
declare var Keyboard: any;
const introJs = require('intro.js');

@Component({
  selector: "app-channel-header",
  templateUrl: "./channel-header.component.html",
  styleUrls: ["./channel-header.component.css"]
})
export class ChannelHeader {
  @Input() channelId;
  channel;
  liveObject;
  otherUser;
  hideBack = false;

  constructor(private api: API, private ngZone: NgZone, public modalCtrl: ModalController, public popCtrl: PopoverController, public navParams: NavParams, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    let user = this.navParams.get('user')
    if (!user.hide_tutorial_endconvo) {
      setTimeout(() => {
        introJs().setOptions({
          disableInteraction: true,
          showProgress: false,
          exitOnOverlayClick: false,
          exitOnEsc: false,
          hidePrev: true,
          steps: [{
            element: document.querySelector('.endConvo'),
            intro: 'No chemistry? End a conversation <br> <br> <img src="assets/images/chem3.gif" style="height:auto;max-width:30%;margin-left:auto;margin-right:auto;display:grid"/>'
          }]
        }).oncomplete(() => {
          this.api.profileUpdate(() => {}, localStorage.getItem('user'), { hide_tutorial_endconvo: true })
        }).start();
      }, 1000)
    }
  }

  ngOnChanges() {
    this.liveObject?.dispose();
    this.liveObject = ChannelRepository.getChannel(this.channelId);
    this.channel = this.liveObject?.model

    this.liveObject.on("dataUpdated", (model) => {
      this.ngZone.run(() => {
        this.channel = model;
      });
    });

    this.otherUser = this.navParams.get('otherUser')
  }

  ngOnDestroy() {
    this.liveObject?.dispose();
  }

  onQuit() {
    try {
      Keyboard.hide()
    } catch (e) {}

    //Slight delay gives the keyboard time to hide if needed.
    setTimeout(() => {
      this.modalCtrl.dismiss(false)
    }, 250)
  }

  onEndConvo(ev: any) {
    this.popoverOpen(ev)
  }

  async popoverOpen(ev: any) {
    this.hideBack = true;

    const popover = await this.popCtrl.create({
      component: ShareProfileComponent,
      componentProps: { like: this.navParams.get('like') },
      translucent: true,
      event: ev,
      mode: 'md'
    });

    let _this = this
    popover.onDidDismiss().then((data) => {
      //Remove card if convo was ended
      if (data['data']) {
        this.modalCtrl.dismiss(true);
      } else {
        _this.hideBack = false;
        _this.changeDetectorRef.detectChanges()
      }
    });

    return await popover.present();
  }
}
