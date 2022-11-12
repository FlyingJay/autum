
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';


@Component({
  selector: 'app-settings-experience-level',
  templateUrl: './settings-experience-level.page.html',
  styleUrls: ['./settings-experience-level.page.scss'],
})
export class SettingsExperienceLevelPageComponent implements OnInit {
  signup: any;
  ExperienceLevel: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
      this.ExperienceLevel = this.signup.importance_Experiences
  }

  selectExperienceLevel(level) {
    this.ExperienceLevel = level
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  validateAndContinue() {
    this.route.navigate(['settings-experience-level']);
  }
}
