
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { MatchComponent } from '@app/components/match/match.component';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-show-me',
  templateUrl: './show-me.page.html',
  styleUrls: ['./show-me.page.scss'],
})
export class ShowMePageComponent implements OnInit {
  showMeSelect = ''
  user: any

  constructor(public service: DataService, public api: API) {
    this.loadData()
  }

  loadData(){
    this.api.me((data) => {
      this.user = data
      this.initializeShowMeSelect(data)
    });
  }

  initializeShowMeSelect(data) {
    if (data.show_male && !data.show_female) {
      this.showMeSelect = 'men'
    } else if (data.show_female && !data.show_male) {
      this.showMeSelect = 'women'
    } else {
      this.showMeSelect = 'everyone'
    }
  }

  updateShowMe() {
    let data = {}
    if (this.showMeSelect == 'men') {
      data = { show_male: true, show_female: false}
    } else if (this.showMeSelect == 'women') {
      data = { show_male: false, show_female: true}
    } else if (this.showMeSelect == 'everyone') {
      data = { show_male: true, show_female: true}
    }

    this.api.profileUpdate((user) => {
      this.user = user
      this.initializeShowMeSelect(user)
    },
    localStorage.getItem('user'),
    data)
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }

  gotoMatch() {
    this.service.openModal(MatchComponent, '');
  }
}
