
import { Component, OnInit } from '@angular/core';
import { API } from '@app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-phone-number-verification',
  templateUrl: './phone-number-verification.page.html',
  styleUrls: ['./phone-number-verification.page.scss'],
})
export class PhoneNumberVerificationPageComponent implements OnInit {
  public obj = document.getElementById('partitioned');
  public inputFocus1: boolean;
  public inputFocus2: boolean;
  public inputFocus3: boolean;
  public inputFocus4: boolean;
  public otpInput1: any;
  public otpInput2: any;
  public otpInput3: any;
  public otpInput4: any;
  phoneNumber: any;
  profile: any;

  constructor(private route: Router, private menuCtrl: MenuController, public activeRoute: ActivatedRoute, public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.phoneNumber = params.input;
      this.profile = params.profile
    });
    this.inputFocus2 = true;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  verify() {
    this.api.profileLoginPhoneVerification(() => {
      this.route.navigate(['app-edit']);
    }, this.profile, {
      phone_verification_code: this.otpInput1 + this.otpInput2 + this.otpInput3 + this.otpInput4
    })
  }

  home() {
    this.route.navigate(['home']);
  }

  onchange(num) {
    if (num === 1) {
      this.inputFocus1 = false;
      this.inputFocus2 = true;
    } else if (num === 2) {
      this.inputFocus3 = true;
    } else if (num === 3) {
      this.inputFocus4 = true;
    } else {
      this.inputFocus1 = false;
      this.inputFocus2 = false;
      this.inputFocus3 = false;
      this.inputFocus4 = false;
    }
  }

  next(el, val) {
    const numberRegex = /^[0-9\s]*$/;
    const regexp = /^\S*$/;
    if (val === '1' && numberRegex.test(this.otpInput1) && regexp.test(this.otpInput1)) {
      el.setFocus();
    } else if (val === '2' && numberRegex.test(this.otpInput2) && regexp.test(this.otpInput2)) {
      el.setFocus();
    } else if (val === '3' && numberRegex.test(this.otpInput3) && regexp.test(this.otpInput3)) {
      el.setFocus();
    }
  }

  preview(el) {
    if (el === 'otp4') {
      el.setFocus();
    }
  }
}