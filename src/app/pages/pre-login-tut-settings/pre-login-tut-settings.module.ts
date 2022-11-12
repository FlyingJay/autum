
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreSettingsLoginPageComponent } from './pre-login-tut-settings.page';

const routes: Routes = [
  {
    path: '',
    component: PreSettingsLoginPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreSettingsLoginPageComponent]
})
export class PreSettingsLoginPageModule { }
