import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';

@Component({
  selector: 'app-signup-interest',
  templateUrl: './signup-interest.page.html',
  styleUrls: ['./signup-interest.page.scss'],
})
export class SignUpInterestComponent implements OnInit {
  chatData: any;
  segmentTab: any;
  buttonClicked: boolean;
  clickData: any;
  imageData: any;

  searchText = ""
  searchSuggestions = []
  interests = []
  signup: any;

  constructor(public route: Router, public modalCtrl: ModalController, public service: DataService,public activeRoute: ActivatedRoute, public api: API) {
    this.chatData = environment.chatData;
    this.clickData = environment.menuDropdown;
    this.imageData = environment.newMatchImages;

    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
  }

  loadData(){
    this.api.signup((signup) => {
      this.interests = signup.interests
    }, this.signup);
  }

  add(interest) {
    this.api.signupInterestCreate((data) => {
      this.loadData()
      this.searchSuggestions = this.searchSuggestions.filter(i => i.id != interest.id)
    },
    { signup: this.signup,
      interest: interest.id });
  }

  remove(interest) {
    this.api.signupInterestDelete((data) => {
      this.loadData()
    }, interest.id);
  }

  addFocus() {

  }

  search() {
    this.searchSuggestions = []
    this.api.interestSearch((interests) => {
      this.searchSuggestions = interests.filter(i => !this.interests.map(signupInterest => signupInterest.interest.id != i.id).includes(false))
    }, this.searchText)
  }

  removeFocus() {

  }

  validateAndContinue() {
    this.route.navigate(['signup-referral', { signup: this.signup }]);
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
