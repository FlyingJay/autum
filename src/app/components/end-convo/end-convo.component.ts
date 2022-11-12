import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '@env/environment';

@Component({
  selector: 'app-end-convo',
  templateUrl: './end-convo.component.html',
  styleUrls: ['./end-convo.component.scss']
})
export class EndConvoComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  endConvo(reason){
    this.modalCtrl.dismiss(reason);
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
