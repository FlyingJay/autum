
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'select-interest',
  templateUrl: './select-interest.page.html',
  styleUrls: ['./select-interest.page.scss'],
})
export class SelectInterestComponent implements OnInit {
  chatData: any;
  segmentTab: any;
  buttonClicked: boolean;
  clickData: any;
  imageData: any;

  searchText = ""
  searchSuggestions = []
  interests = []
  constructor(public route: Router, public modalCtrl: ModalController, public service: DataService, public api: API) {
    this.chatData = environment.chatData;
    this.clickData = environment.menuDropdown;
    this.imageData = environment.newMatchImages;
    this.loadData()
  }

  loadData(){
    this.api.me((user) => {
      this.interests = user.interests
    });
  }

  add(interest) {
    this.api.profileInterestCreate((data) => {
      this.loadData()
      this.searchSuggestions = this.searchSuggestions.filter(i => i.id != interest.id)
    },
    { profile: localStorage.getItem('user'),
      interest: interest.id });
  }

  remove(interest) {
    this.api.profileInterestDelete((data) => {
      this.loadData()
    }, interest.id);
  }

  addFocus() {
    //this.searchSuggestions = []
  }

  search() {
    this.api.interestSearch((results) => {
      const selectedIds = this.interests.map(selected => selected.interest.id)
      this.searchSuggestions = results.filter(result => selectedIds.filter(id => id == result.id).length == 0)
    }, this.searchText)
  }

  removeFocus() {
    //setTimeout(() => { this.searchSuggestions = [] }, 500)
  }

 ngOnInit() {
   console.log('ngOnInit');
 }
 changeClick() {
   this.buttonClicked = !this.buttonClicked;
 }
 changeSelected() {
   setTimeout(() => {
     this.buttonClicked = false;
   }, 500);
 }

}
