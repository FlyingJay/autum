
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinderPlusPageComponent } from './tinder-plus.page';

const routes: Routes = [
  {
    path: '',
    component: TinderPlusPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TinderPlusPageComponent]
})
export class TinderPlusPageModule { }
