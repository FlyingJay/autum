import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EndConvoComponent } from '../end-convo/end-convo.component';
import { IonContent, NavParams, ModalController } from '@ionic/angular';
import { ReportComponent } from '@app/components/report/report.component';
import { DataService } from '@app/services/data.service';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-share-profile',
  templateUrl: './share-profile.component.html',
  styleUrls: ['./share-profile.component.scss']
})
export class ShareProfileComponent implements OnInit {
  @Input('like') like: any;

  constructor(private api: API, public service: DataService, public popCtrl: PopoverController, public modalCtrl: ModalController) {

  }

  closePopOver() {
    this.popCtrl.dismiss();
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }
  /*
  goForReport() {
    this.service.openModal(ReportComponent, '');
  }*/

  async openReportConvo() {
    const modal = await this.modalCtrl.create({
      component: ReportComponent
    });

    modal.onDidDismiss().then((data) => {
      //Pass status of ended convo through
      if (data['data']) {
        this.api.likeUpdate(() => {
          this.popCtrl.dismiss(true);
        },
        this.like,
        { is_active: false,
          is_ended: true,
          is_ended_by: localStorage.getItem('user'),
          is_ended_reason: data['data'] })
      } else {
        this.popCtrl.dismiss(false)
      }
    });

    return await modal.present();
  }

  async openEndConvo() {
    const modal = await this.modalCtrl.create({
      component: EndConvoComponent
    });

    modal.onDidDismiss().then((data) => {
      //Pass status of ended convo through
      if (data['data']) {
        this.api.likeUpdate(() => {
          this.popCtrl.dismiss(true);
        },
        this.like,
        { is_active: false,
          is_ended: true,
          is_ended_by: localStorage.getItem('user'),
          is_ended_reason: data['data'] })
      } else {
        this.popCtrl.dismiss(false)
      }
    });

    return await modal.present();
  }

  closeModal() {
    this.modalCtrl.dismiss(false);
  }
}
