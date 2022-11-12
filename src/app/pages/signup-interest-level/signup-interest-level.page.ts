
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';



@Component({
  selector: 'app-signup-interest-level',
  templateUrl: './signup-interest-level.page.html',
  styleUrls: ['./signup-interest-level.page.scss'],
})
export class SignUpInterestLevelPageComponent implements OnInit {
  signup: any;
  interestLevel: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.interestLevel = signup.importance_interests
    }, this.signup);
  }

  selectInterestLevel(level) {
    this.interestLevel = level
    this.api.signupUpdate((signup) => {
      this.route.navigate(['signup-interest', { signup: signup.id }]);
    }, this.signup, {
      importance_interests: level
    })
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  validateAndContinue() {
    this.route.navigate(['signup-interest']);
  }
}
