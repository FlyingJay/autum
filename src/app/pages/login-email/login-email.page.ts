
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';


@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPageComponent implements OnInit {
  user: any;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      validateEmail()
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
      ])
  });

  constructor(public api: API) { }

  login(){
    if (this.loginForm.invalid) {
        return;
    }
    this.api.login(() => {
        //this.navCtrl.setRoot(ListingPage);
      },
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
      );
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }
  loginWithEmail() { }

}
