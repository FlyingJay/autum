
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPhoneVerificationPageComponent } from './login-phone-verification.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPhoneVerificationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPhoneVerificationPageComponent]
})
export class LoginPhoneVerificationPageModule { }
