
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { API } from '@app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login-phone-verification',
  templateUrl: './login-phone-verification.page.html',
  styleUrls: ['./login-phone-verification.page.scss'],
})
export class LoginPhoneVerificationPageComponent implements OnInit {
  public obj = document.getElementById('partitioned');
  public otpInput: any;
  phoneNumber: any;
  profile: any;
  isAndroid = false;

  constructor(public platform: Platform, private route: Router, private menuCtrl: MenuController, public activeRoute: ActivatedRoute, public api: API, private location: Location) {
      if (this.platform.is('android')) {
        this.isAndroid = true;
      }
    this.activeRoute.params.subscribe((params) => {
      this.phoneNumber = params.input;
      this.profile = params.profile
    });
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  tryVerify(event: any) {
    if (this.otpInput?.length == 4) {
      (document.activeElement as HTMLElement).blur()
      this.verify()
    }
  }

  verify() {
    this.api.profileLoginPhoneVerification(() => {
      this.route.navigate(['home']);
    }, this.profile, {
      phone_verification_code: this.otpInput
    })
  }

  back() {
    this.location.back()
  }
}
