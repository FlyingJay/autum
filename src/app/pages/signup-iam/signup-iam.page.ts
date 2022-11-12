
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-iam',
  templateUrl: './signup-iam.page.html',
  styleUrls: ['./signup-iam.page.scss'],
})
export class SignUpIamPageComponent implements OnInit {
  user: any;
  signup: any;
  gender: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.gender = signup.gender
    }, this.signup);
  }

  selectMale(){
    this.api.signupUpdateMale((signup) => {
      this.route.navigate(['signup-sexualOR', { signup: signup.id }]);
    }, this.signup)
  }

  selectFemale(){
    this.api.signupUpdateFemale((signup) => {
      this.route.navigate(['signup-sexualOR', { signup: signup.id }]);
    }, this.signup)
  }

  goToGenderSelect() {
    this.route.navigate(['signup-gender-select', { signup: this.signup }]);
  }

  goToSexualOrientation() {
    this.route.navigate(['signup-sexualOR', { signup: this.signup }]);
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  loginWithEmail() { }
}
