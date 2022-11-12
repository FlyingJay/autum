
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@app/pipes/pipes.module';
import { Routes, RouterModule } from '@angular/router';
import { SwingModule } from 'angular2-swing';

import { IonicModule } from '@ionic/angular';

import { CropperComponent } from './cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ImageCropperModule,
  ],
  declarations: [CropperComponent],
  exports: [CropperComponent]
})
export class CropperModule { }
