
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPageComponent implements OnInit {
  pushData: any;
  constructor(public service: DataService) {
    this.pushData = environment.pushNotifications;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
