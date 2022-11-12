
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";


@Component({
  selector: 'app-signup-referral',
  templateUrl: './signup-referral.page.html',
  styleUrls: ['./signup-referral.page.scss'],
})
export class SignupReferralPageComponent  {
  ambassadors: string[] = [];
  user: any;
  signup: any;
  orientation: any;

  constructor(private pickerController: PickerController,private route: Router,public activeRoute: ActivatedRoute,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData() {
    this.api.ambassadors((ambassadors) => {
      this.ambassadors = ambassadors.map(a => a?.first_name + (a.first_name && a.last_name ? ' ' : '') + a?.last_name) 
    });
  }

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler: (value:any) => {
            this.api.signupUpdate(() => {
              this.finishSignup()
            }, this.signup, { 
              referral_code: value['Ambassadors']['text']
            })
          }
        }
      ],
      columns:[{
        name:'Ambassadors',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions() {
    return this.ambassadors.map(ambassador => {
      return { text: ambassador, value: ambassador}
    })
  }

  finishSignup() {
    this.api.signupFinish(() => {
      this.route.navigate(['home']);
    }, this.signup)
  }
}
