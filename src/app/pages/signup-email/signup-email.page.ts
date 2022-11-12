import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-email',
  templateUrl: './signup-email.page.html',
  styleUrls: ['./signup-email.page.scss'],
})
export class SignUpEmailPageComponent implements OnInit {
  user: any;
  signup: any;
  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      validateEmail
    ])
  });

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
    });
  }

  validateAndContinue(){
    if (this.signupForm.invalid) {
        return;
    }
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-name', { signup: signup.id }]);
    }, this.signup, {
      email: this.signupForm.controls.email.value
    })
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  loginWithEmail() {

  }
}
