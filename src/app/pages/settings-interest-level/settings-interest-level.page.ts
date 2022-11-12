
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';


@Component({
  selector: 'app-settings-interest-level',
  templateUrl: './settings-interest-level.page.html',
  styleUrls: ['./settings-interest-level.page.scss'],
})
export class SettingsInterestLevelPageComponent implements OnInit {
  signup: any;
  interestLevel: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
      this.interestLevel = this.signup.importance_interests
  }

  selectInterestLevel(level) {
    this.interestLevel = level
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  validateAndContinue() {
    this.route.navigate(['settings-interest']);
  }
}
