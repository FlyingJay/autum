
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpInterestLevelPageComponent } from './signup-interest-level.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpInterestLevelPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpInterestLevelPageComponent]
})
export class SignUpInterestLevelPageModule { }
