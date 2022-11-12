


import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public modalCtrl: ModalController) { }

  async openModal(comp, props, cssClass?) {
    const modal = await this.modalCtrl.create({
      component: comp,
      componentProps: { value: props },
      cssClass: cssClass
    });
    return modal.present();
  }
}
