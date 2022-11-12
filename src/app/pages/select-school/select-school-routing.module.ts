import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSchoolPage } from './select-school.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSchoolPageRoutingModule {}
