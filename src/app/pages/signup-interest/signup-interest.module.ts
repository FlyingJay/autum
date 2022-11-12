
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignUpInterestComponent } from './signup-interest.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpInterestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpInterestComponent]
})
export class SignUpInterestPageModule { }
