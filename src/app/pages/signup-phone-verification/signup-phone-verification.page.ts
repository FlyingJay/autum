
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { API } from '@app/services/api.service';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-signup-phone-verification',
  templateUrl: './signup-phone-verification.page.html',
  styleUrls: ['./signup-phone-verification.page.scss'],
})
export class SignupPhoneVerificationPageComponent implements OnInit {
  public obj = document.getElementById('partitioned');
  phoneNumber: any;
  public otpInput: any;
  signup: any;
  isAndroid = false;

  constructor(public platform: Platform, private route: Router, private menuCtrl: MenuController, public activeRoute: ActivatedRoute, public api: API, private location: Location) {
      if (this.platform.is('android')) {
        this.isAndroid = true;
      }
    this.activeRoute.params.subscribe((params) => {
      this.phoneNumber = params.input;
      this.signup = params.signup
    });
  }

  ngOnInit() {
   // console.log('ngOnInit');
  }

  tryVerify(event: any) {
      if (this.otpInput?.length == 4) {
        this.verify()
      }
    }

  verify() {
    this.api.signupUpdate((signup) => {
      if (signup.is_phone_verified) {
        this.route.navigate(['signup-name', { signup: signup.id }]);
      } else {
        alert("Incorrect verification code.")
      }
    }, this.signup, {
      phone_verification_code: this.otpInput
    })
  }

  back() {
    this.location.back()
  }




}
