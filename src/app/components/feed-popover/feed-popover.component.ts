
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-feed-popover',
  templateUrl: './feed-popover.component.html',
  styleUrls: ['./feed-popover.component.scss']
})
export class FeedPopoverComponent implements OnInit {

  constructor(public popCtrl: PopoverController, public route: Router, public service: DataService) { }
  closePopOver() {
    this.popCtrl.dismiss();
  }
  reportPopOver() {
    this.popCtrl.dismiss();
    this.service.openModal(ReportComponent, '');
  }
  openProfileOver() {
    this.popCtrl.dismiss();
    this.route.navigate(['edit']);
  }
  openChatPopOver() {

  }
  ngOnInit() {
    console.log('ngOnInit');
  }
}
