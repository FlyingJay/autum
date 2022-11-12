
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tinder-icons',
  templateUrl: './tinder-icons.component.html',
  styleUrls: ['./tinder-icons.component.scss']
})
export class TinderIconsComponent implements OnInit {
  data: any;
  slideOpts = {
    effect: 'flip'
  };
  @Input() value: any;
  show: boolean;
  isIos: boolean;
  constructor(public modalCtrl: ModalController,
    public navParams: NavParams,
    public route: Router,
    public platform: Platform) {
    this.data = this.navParams.get('value');
    this.show = false;
    this.isIos = this.platform.is('ios');

  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  closeModal(id: any) {
    this.modalCtrl.dismiss();
    if (id === 'star' || 'refresh' && id !== 'flash') {
      this.route.navigate(['tinder-plus']);
    }
  }
  showCustomButton(index: any) {
    if (index === 1) {
      this.show = true;
    } else if (index === 0 || 2) {
      this.show = false;
    }
  }
}
