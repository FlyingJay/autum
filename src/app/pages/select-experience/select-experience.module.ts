
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectExperienceComponent } from './select-experience.page';

const routes: Routes = [
  {
    path: '',
    component: SelectExperienceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectExperienceComponent]
})
export class SelectExperiencePageModule { }
