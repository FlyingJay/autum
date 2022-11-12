
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutoplayVideoPageComponent } from './autoplay-video.page';

const routes: Routes = [
  {
    path: '',
    component: AutoplayVideoPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutoplayVideoPageComponent]
})
export class AutoplayVideoPageModule { }
