
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightBoxComponent implements OnInit {
  @Input() value: string;
  image: string;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.image = (JSON.parse(this.value)).image;
    console.log((JSON.parse(this.value)).image);
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
