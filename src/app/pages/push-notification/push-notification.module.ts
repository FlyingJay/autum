
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PushNotificationPageComponent } from './push-notification.page';

const routes: Routes = [
  {
    path: '',
    component: PushNotificationPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PushNotificationPageComponent]
})
export class PushNotificationPageModule { }
