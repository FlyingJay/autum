

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'signup-gender-select',
  templateUrl: './signup-gender-select.page.html',
  styleUrls: ['./signup-gender-select.page.scss'],
})
export class SelectGenderComponent implements OnInit {
  chatData: any;
   segmentTab: any;
   buttonClicked: boolean;
   clickData: any;
   imageData: any;

   searchText = ""
   searchSuggestions = []
   gender: any;
   signup: any;
   constructor(public route: Router, public modalCtrl: ModalController, public service: DataService,public activeRoute: ActivatedRoute , public api: API) {
     this.activeRoute.params.subscribe((params) => {
       this.signup = params.signup
       this.loadData()
     });
   
     this.chatData = environment.chatData;
     this.clickData = environment.menuDropdown;
     this.imageData = environment.newMatchImages;
   }

  loadData(){
    this.api.signup((signup) => {
      this.gender = signup.gender
    }, this.signup);
  }

  add(gender) {
    this.api.signupUpdate((data) => {
      this.loadData()
      this.searchSuggestions = this.searchSuggestions.filter(i => i.id != gender.id)
    },
    this.signup,
    { gender: gender.id });
  }

  addFocus() {
    this.searchSuggestions = []
  }

  search() {
    this.searchSuggestions = []
    this.api.genderSearch((genders) => {
      this.searchSuggestions = genders
    }, this.searchText)
  }

  removeFocus() {
    setTimeout(() => { this.searchSuggestions = [] }, 500)
  }

  genderSelect() {
    this.route.navigate(['signup-gender-select']);
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
