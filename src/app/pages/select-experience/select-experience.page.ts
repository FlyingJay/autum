

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'select-experience',
  templateUrl: './select-experience.page.html',
  styleUrls: ['./select-experience.page.scss'],
})
export class SelectExperienceComponent implements OnInit {
  chatData: any;
   segmentTab: any;
   buttonClicked: boolean;
   clickData: any;
   imageData: any;

   searchText = ""
   searchSuggestions = []
   experiences = []
   constructor(public route: Router, public modalCtrl: ModalController, public service: DataService, public api: API) {
     this.chatData = environment.chatData;
     this.clickData = environment.menuDropdown;
     this.imageData = environment.newMatchImages;
     this.loadData()
   }

  loadData(){
    this.api.me((user) => {
      this.experiences = user.experiences
    });
  }

  add(experience) {
    this.api.profileExperienceCreate((data) => {
      this.loadData()
      this.searchSuggestions = this.searchSuggestions.filter(i => i.id != experience.id)
    },
    { profile: localStorage.getItem('user'),
      experience: experience.id });
  }

  remove(experience) {
    this.api.profileExperienceDelete((data) => {
      this.loadData()
    }, experience.id);
  }

  addFocus() {
    //this.searchSuggestions = []
  }

  search() {
    this.api.experienceSearch((results) => {
      const selectedIds = this.experiences.map(selected => selected.experience.id)
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
