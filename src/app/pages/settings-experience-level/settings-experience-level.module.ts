import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsExperienceLevelPageComponent } from './settings-experience-level.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsExperienceLevelPageComponent
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
  declarations: [SettingsExperienceLevelPageComponent]
})
export class SettingsExperienceLevelPageModule { }
