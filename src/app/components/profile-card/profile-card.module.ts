
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(): any {
  return import('lottie-web');
}

import { PipesModule } from '@app/pipes/pipes.module';
import { ProfileCardComponent } from './profile-card.component';
import { ScrollHorizontalComponentModule } from '@app/components/scroll-horizontal/scroll-horizontal.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    ScrollHorizontalComponentModule,
    DragDropModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [ProfileCardComponent],
  exports: [ProfileCardComponent]
})
export class ProfileCardModule { }
