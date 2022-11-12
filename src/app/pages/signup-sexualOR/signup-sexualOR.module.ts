
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpSexualORPageComponent } from './signup-sexualOR.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpSexualORPageComponent
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
  declarations: [SignUpSexualORPageComponent]
})
export class SignUpSexualORPageModule { }
