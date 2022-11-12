

import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPageComponent implements OnInit {
  emailData: any;
  constructor(public service: DataService) {
    this.emailData = environment.emailVerification;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
