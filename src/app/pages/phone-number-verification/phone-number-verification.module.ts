
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhoneNumberVerificationPageComponent } from './phone-number-verification.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumberVerificationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhoneNumberVerificationPageComponent]
})
export class PhoneNumberVerificationPageModule { }
