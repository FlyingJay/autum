import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupReferralPageComponent} from './signup-referral.page';

const routes: Routes = [
  {
    path: '',
    component: SignupReferralPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupReferralPageComponent]
})
export class SignupReferralPageModule { }
