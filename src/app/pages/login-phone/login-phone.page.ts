
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.page.html',
  styleUrls: ['./login-phone.page.scss'],
})
export class LoginPhonePageComponent implements OnInit {
/*  click : boolean = false;*/
  @ViewChild('phoneInput') phoneInput;
  customPopoverOptions: any = {
  };
  data: { 'name': string; 'dial_code': string; 'code': string; }[];
  selectedValue: any = '+1';
  inputValue: any = '';
  phoneNumber: any;

  constructor(public route: Router, public api: API) {
    this.data = environment.COUNTRY_DATA;
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  ionViewDidEnter() {
    this.phoneInput.setFocus();
  }

  gotoVerification() {
    this.phoneNumber = this.selectedValue + this.inputValue

    this.api.profileLoginPhone((profile, error) => {
      if (error) {
          this.api.signupCreate((signup) => {
            this.route.navigate(['signup-phone-verification', { signup: signup.id, input: this.inputValue }]);
          }, {
            phone: this.phoneNumber
          })
      } else {
        this.route.navigate(['login-phone-verification', { profile: profile.id, input: this.inputValue }]);
      }
    }, {
      phone: this.phoneNumber
    })
  }

/*   onButtonClick(){
      this.click = !this.click;
      console.log(this.click);
    }*/
}
