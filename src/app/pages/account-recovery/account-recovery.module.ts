
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountRecoveryPageComponent } from './account-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: AccountRecoveryPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountRecoveryPageComponent]
})
export class AccountRecoveryPageModule { }
