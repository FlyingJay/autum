
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-show-me-iam',
  templateUrl: './show-me-iam.page.html',
  styleUrls: ['./show-me-iam.page.scss'],
})
export class ShowMePageIamComponent implements OnInit {
  chatData: any;
   segmentTab: any;
   buttonClicked: boolean;
   clickData: any;
   imageData: any;

   searchText = ""
   searchSuggestions = []
   gender: any;
   constructor(public route: Router, public modalCtrl: ModalController, public service: DataService, public api: API) {
     this.chatData = environment.chatData;
     this.clickData = environment.menuDropdown;
     this.imageData = environment.newMatchImages;
     this.loadData()
   }

  loadData(){
    this.api.me((user) => {
      this.gender = user.gender
    });
  }

  add(gender) {
    this.api.profileUpdate((data) => {
      this.loadData()
      this.searchSuggestions = []
      this.searchText = ""
    },
    localStorage.getItem('user'),
    { gender: gender.id });
  }

  addFocus() {
    //this.searchSuggestions = []
  }

  search() {
    //this.searchSuggestions = []
    this.api.genderSearch((genders) => {
      this.searchSuggestions = genders
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
