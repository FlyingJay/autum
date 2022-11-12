
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmailVerificationPageComponent } from './email-verification.page';

const routes: Routes = [
  {
    path: '',
    component: EmailVerificationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmailVerificationPageComponent]
})
export class EmailVerificationPageModule { }
