import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSchoolPageRoutingModule } from './select-school-routing.module';

import { SelectSchoolPage } from './select-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSchoolPageRoutingModule
  ],
  declarations: [SelectSchoolPage]
})
export class SelectSchoolPageModule {}
