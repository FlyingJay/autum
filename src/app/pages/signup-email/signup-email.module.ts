
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpEmailPageComponent } from './signup-email.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpEmailPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpEmailPageComponent]
})
export class SignUpEmailPageModule { }
