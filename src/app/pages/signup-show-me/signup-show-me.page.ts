
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-show-me',
  templateUrl: './signup-show-me.page.html',
  styleUrls: ['./signup-show-me.page.scss'],
})
export class SignUpShowMePageComponent implements OnInit {
  signup: any;
  show_men: any;
  show_women: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.show_men = signup.show_male
      this.show_women = signup.show_female
    }, this.signup);
  }

  selectMen(){
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-university', { signup: signup.id }]);
    }, this.signup, {
      show_male: 1,
      show_female: 0
    })
  }

  selectWomen(){
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-university', { signup: signup.id }]);
    }, this.signup, {
      show_male: 0,
      show_female: 1
    })
  }

  selectEveryone(){
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-university', { signup: signup.id }]);
    }, this.signup, {
      show_male: 1,
      show_female: 1
    })
  }

  verifyShowMe() {
    this.route.navigate(['signup-university']);
  }

  genderSelect() {
    this.route.navigate(['signup-gender-select']);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  loginWithEmail() { }
}
