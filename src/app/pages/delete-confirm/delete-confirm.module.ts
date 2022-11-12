
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteConfirmPageComponent } from './delete-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteConfirmPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteConfirmPageComponent]
})
export class DeleteConfirmPageModule { }
