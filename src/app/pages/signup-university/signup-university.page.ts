
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-university',
  templateUrl: './signup-university.page.html',
  styleUrls: ['./signup-university.page.scss'],
})
export class SignUpUniversityPageComponent implements OnInit {
  searchText = ""
  searchSuggestions = []
  interests = []

  signup: any;
  school = null;
  school_name = "";

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.school = signup.school ? signup.school.id : null
      this.school_name = signup.school ? signup.school.name : ""
    }, this.signup);
  }

  validateAndContinue(){
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-photo', { signup: signup.id }]);
      this.searchText = ""
    }, this.signup, {
      school: this.school
    })
  }

  skip() {
    this.school = null;
    this.school_name = "";
    this.validateAndContinue()
  }

  add(school) {
    this.school = school.id
    this.school_name = school.name
    this.validateAndContinue()
  }

  remove() {
    this.api.signupUpdate((signup) => {
      this.loadData()
    }, this.signup, {
      school: null
    })
  }

  addFocus() {
    this.searchSuggestions = []
  }

  search() {
    this.searchSuggestions = []
    this.api.schoolSearch((schools) => {
      this.searchSuggestions = schools
    }, this.searchText)
  }

  removeFocus() {
    setTimeout(() => { this.searchSuggestions = [] }, 500)
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  loginWithEmail() { }

}
