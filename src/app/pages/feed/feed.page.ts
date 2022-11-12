
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPageComponent implements OnInit {
  feedData: any;
  constructor(public service: DataService) {
    this.feedData = environment.shareFeed;
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

}
