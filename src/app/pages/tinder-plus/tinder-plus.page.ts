
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-tinder-plus',
  templateUrl: './tinder-plus.page.html',
  styleUrls: ['./tinder-plus.page.scss'],
})
export class TinderPlusPageComponent implements OnInit {
  tinderPlusData: any;
  constructor(public serviceProvider: DataService) {
    this.tinderPlusData = environment.tinderPlus;
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

}
