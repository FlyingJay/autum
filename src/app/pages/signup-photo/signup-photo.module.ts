
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { KtdGridModule } from '@katoid/angular-grid-layout';

import { IonicModule } from '@ionic/angular';

import { SignUpPhotoPageComponent } from './signup-photo.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPhotoPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KtdGridModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpPhotoPageComponent]
})
export class SignUpPhotoPageModule { }
