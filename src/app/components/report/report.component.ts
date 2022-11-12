import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '@env/environment';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
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
