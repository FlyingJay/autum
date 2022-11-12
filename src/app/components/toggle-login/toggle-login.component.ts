
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-login',
  templateUrl: './toggle-login.component.html',
  styleUrls: ['./toggle-login.component.scss']
})
export class ToggleLoginComponent implements OnInit {

  constructor(public modalCtrl: ModalController, public service: DataService, public route: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
  }
  toggleContentClose() {
    this.modalCtrl.dismiss();
  }
  gotAccountRecovery() {
    this.modalCtrl.dismiss();
    this.route.navigate(['account-recovery']);
  }
  loginWithPhone() {
    this.modalCtrl.dismiss();
    this.route.navigate(['login-phone']);

  }
}
