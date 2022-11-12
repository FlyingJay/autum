
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-sexualOR',
  templateUrl: './signup-sexualOR.page.html',
  styleUrls: ['./signup-sexualOR.page.scss'],
})
export class SignUpSexualORPageComponent implements OnInit {
  user: any;
  signup: any;
  orientation: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.orientation = signup.orientation
    }, this.signup);
  }

  selectOrientation(orientation) {
    this.orientation = orientation
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-show-me', { signup: signup.id }]);
    }, this.signup, {
      orientation
    })
  }

 verifyOrientation() {
    this.route.navigate(['signup-show-me', { signup: this.signup }]);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  loginWithEmail() {

  }
}
