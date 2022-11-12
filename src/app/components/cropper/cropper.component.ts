import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { ImageCroppedEvent, LoadedImage, ImageCropperComponent } from 'ngx-image-cropper';


@Component({
  selector: 'div[app-cropper]',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
})
export class CropperComponent implements OnInit {
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  @Input('imageChangedEvent') imageChangedEvent: any;
  croppedImageEvent: any;
  isLoaded = false;

  constructor(public modalCtrl: ModalController, public platform: Platform) { }


  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss(this.croppedImageEvent);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageEvent = event;
  }

  imageLoaded() {
    // Manually call the crop function once to ensure 
    // the cropper outputs consistently even if nothing changed.
    this.imageCropper.crop()

    // show cropper
    this.isLoaded = true;
  }

  cropperReady() {
    //cropper ready
  }

  loadImageFailed() {
    // show message
    this.modalCtrl.dismiss();

    if (this.platform.is('android')) {
      alert('pssst.. the back button breaks the cropper, but we\'re working on it. Switch tabs to reload the cropper.');
    } else if (this.platform.is('ios')) {
      alert('iCloud photos are not supported at this time. Switch tabs to reload the cropper.');
    } else {
      alert('Oops something went wrong. Please try again, and resart the app if that doesn\'t help. :)');
    }
  }
}
