
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { MatchComponent } from '@app/components/match/match.component';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-show-me-sexual-orientation',
  templateUrl: './show-me-sexual-orientation.page.html',
  styleUrls: ['./show-me-sexual-orientation.page.scss'],
})
export class ShowMePageOrientationComponent implements OnInit {
  selected_values=[];
  disabled=false;
  cacheChecks=null
  orientation: any;

  constructor(private route: Router,public activeRoute: ActivatedRoute,public service: DataService,public api: API) {
    this.activeRoute.params.subscribe((params) => {
      this.loadData()
    });
  }

  loadData(){
    this.api.me((profile) => {
      this.orientation = profile.orientation
    });
  }

  selectOrientation(orientation) {
    this.orientation = orientation
    this.api.profileUpdate((profile) => {
      this.orientation = profile.orientation
    }, localStorage.getItem('user'), {
      orientation
    })
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  gotoMatch() {
    this.service.openModal(MatchComponent, '');
  }

  onSelect(){
    //alert(this.selected_values.length)
    if(this.selected_values.length>3){
      this.selected_values=[this.selected_values[0],this.selected_values[1],this.selected_values[2]]

    }
  }
}
