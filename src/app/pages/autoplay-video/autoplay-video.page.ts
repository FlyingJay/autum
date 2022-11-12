
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-autoplay-video',
  templateUrl: './autoplay-video.page.html',
  styleUrls: ['./autoplay-video.page.scss'],
})
export class AutoplayVideoPageComponent implements OnInit {
  videoData: any;
  constructor(public service: DataService) {
    this.videoData = environment.videoAutoplay;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
