
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPhoneVerificationPageComponent } from './signup-phone-verification.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPhoneVerificationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPhoneVerificationPageComponent]
})
export class SignupPhoneVerificationPageModule { }
