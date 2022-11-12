
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowMePageOrientationComponent } from './show-me-sexual-orientation.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMePageOrientationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowMePageOrientationComponent]
})
export class ShowMePageOrientationModule { }
