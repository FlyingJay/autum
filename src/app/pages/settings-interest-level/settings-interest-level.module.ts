import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsInterestLevelPageComponent } from './settings-interest-level.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsInterestLevelPageComponent
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
  declarations: [SettingsInterestLevelPageComponent]
})
export class SettingsInterestLevelPageModule { }
