import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { NavController, PopoverController } from '@ionic/angular';
import { ShareProfileComponent } from '../share-profile/share-profile.component';
import { ReportComponent } from '../report/report.component';
import { FeedPopoverComponent } from '../feed-popover/feed-popover.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {
  feedData: any;
  icons: any;
  slideOpts = {
    effect: 'flip',
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  };
  constructor(public activeRouter: ActivatedRoute,
    public service: DataService,
    public navCtrl: NavController,
    public popOver: PopoverController) {
    this.icons = environment.footer_icons;
    this.feedData = environment.messageFeedData;

  }
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  async openPopoverOptions(ev) {
    const popover = await this.popOver.create({
      component: ShareProfileComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  goForReport() {
    this.service.openModal(ReportComponent, '');
  }
  async change() {

  }
  async openPopover(ev) {
    const popover = await this.popOver.create({
      component: FeedPopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
