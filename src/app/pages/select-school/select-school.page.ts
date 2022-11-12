import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-select-school',
  templateUrl: './select-school.page.html',
  styleUrls: ['./select-school.page.scss'],
})
export class SelectSchoolPage implements OnInit {
  chatData: any;
   segmentTab: any;
   buttonClicked: boolean;
   clickData: any;
   imageData: any;

   searchText = ""
   searchSuggestions = []
   school: any;
   constructor(public route: Router, public modalCtrl: ModalController, public service: DataService, public api: API) {
     this.chatData = environment.chatData;
     this.clickData = environment.menuDropdown;
     this.imageData = environment.newMatchImages;
     this.loadData()
   }

  loadData(){
    this.api.me((user) => {
      this.school = user.school
    });
  }

  add(school) {
    if (this.school) {
      this.remove()
    }

    this.api.profileUpdate((data) => {
      this.loadData()
      this.searchSuggestions = []
      this.searchText = ""
    },
    localStorage.getItem('user'),
    { school: school.id });
  }

  remove() {
    this.api.profileUpdate((data) => {
      this.loadData()
      this.searchSuggestions = []
    },
    localStorage.getItem('user'),
    { school: null });
  }

  addFocus() {
    //this.searchSuggestions = []
  }

  search() {
    //this.searchSuggestions = []
    this.api.schoolSearch((schools) => {
      this.searchSuggestions = schools
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
