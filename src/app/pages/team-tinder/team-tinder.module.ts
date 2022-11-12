
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamTinderPageComponent } from './team-tinder.page';

const routes: Routes = [
  {
    path: '',
    component: TeamTinderPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamTinderPageComponent]
})
export class TeamTinderPageModule { }
