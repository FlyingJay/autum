
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';
import * as moment from 'moment';


@Component({
  selector: 'app-signup-birth',
  templateUrl: './signup-birth.page.html',
  styleUrls: ['./signup-birth.page.scss'],
})
export class SignUpBirthPageComponent implements OnInit {
  user: any;
  signup: any;
  signupForm = new FormGroup({
    birthdate: new FormControl('', [
      Validators.required
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

    let birthday = moment(this.signupForm.controls.birthdate.value)
    if (moment().diff(birthday, 'years') < 18) {
      alert("You must be 18+ to use Autum.  See you soon!");
      return
    }

    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-iam', { signup: signup.id }]);
    }, this.signup, {
      birthday: birthday.format('YYYY-MM-DD')
    })
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  loginWithEmail() {

  }
}
