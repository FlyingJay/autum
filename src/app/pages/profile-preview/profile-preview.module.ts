
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePreviewPageComponent } from '@app/pages/profile-preview/profile-preview.page';
import { ScrollHorizontalComponentModule } from '@app/components/scroll-horizontal/scroll-horizontal.module';
import { ProfileCardModule } from '@app/components/profile-card/profile-card.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePreviewPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollHorizontalComponentModule,
    ProfileCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePreviewPageComponent]
})
export class ProfilePreviewPageModule { }
