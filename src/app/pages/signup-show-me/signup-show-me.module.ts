
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpShowMePageComponent } from './signup-show-me.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpShowMePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpShowMePageComponent]
})
export class SignUpShowMePageModule { }
