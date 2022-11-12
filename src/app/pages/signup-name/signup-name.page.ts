import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';


@Component({
  selector: 'app-signup-name',
  templateUrl: './signup-name.page.html',
  styleUrls: ['./signup-name.page.scss'],
})
export class SignUpNamePageComponent implements OnInit {
  user: any;
  signup: any;
  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private route: Router,public activeRoute: ActivatedRoute, public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
    });
  }

  validateAndContinue(){
    if (this.signupForm.invalid) {
        return;
    }
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-birth', { signup: signup.id }]);
    }, this.signup, {
      first_name: this.signupForm.controls.name.value,
      email: "fakemail." + Date.now() + Math.random() + "@autumapp.com"
    })
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  loginWithEmail() { }
}
