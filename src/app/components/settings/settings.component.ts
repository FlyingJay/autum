import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { TermsComponent } from '@app/components/terms/terms.component';
import { NavController } from '@ionic/angular';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { ExpandableComponent } from '@app/components/expandable/expandable.component';

declare var google: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  @Output() navigateToDeck = new EventEmitter();
  @Output() refreshUser = new EventEmitter();
  @Input('user') user: any;

	places = new google.maps.places.PlacesService(document.createElement('div'));
	userLocation = null

  rangeSingle: any;
  rangeDualKnobs = { lower: null, upper: null };
  rangeHeightDualKnobs = { lower: null, upper: null };
  isLoading = true;

  constructor(public route: Router, public service: DataService, public api: API, public geolocation: Geolocation, public platform: Platform, public navCtrl: NavController) {

  }

  ngOnChanges() {
      if (this.user) {
        this.rangeSingle = this.user.distance_max
        this.rangeDualKnobs = { lower: this.user.age_min, upper: this.user.age_max }
        this.rangeHeightDualKnobs = { lower: this.user.height_min, upper: this.user.height_max }
        this.userLocation = this.user.location ? 'Current Location' : 'Needs Permission!'

        this.isLoading = false;
      } else {
        this.isLoading = true;
      }
  }

  updateDistance(){
    if (this.rangeSingle) {
      this.api.profileUpdate((user) => {},
      localStorage.getItem('user'),
      { distance_max: this.rangeSingle })
    }
  }

  updateAgeRange(){
    if (this.rangeDualKnobs.lower && this.rangeDualKnobs.upper) {
      this.api.profileUpdate((user) => {},
      localStorage.getItem('user'),
      { age_min: this.rangeDualKnobs.lower,
        age_max: this.rangeDualKnobs.upper })
    }
  }

  updateHeightRange(){
    if (this.rangeHeightDualKnobs.lower && this.rangeHeightDualKnobs.upper) {
      this.api.profileUpdate((user) => {},
      localStorage.getItem('user'),
      { height_min: this.rangeHeightDualKnobs.lower,
        height_max: this.rangeHeightDualKnobs.upper })
    }
  }

  heightLower() {
    if (this.user?.show_height_cm) {
      return this.rangeHeightDualKnobs.lower < 37
             ? 'Min'
             : Math.floor(this.rangeHeightDualKnobs.lower * 2.54)
    } else {
      return this.rangeHeightDualKnobs.lower < 37
              ? 'Min'
              : Math.floor(this.rangeHeightDualKnobs.lower / 12) + "' " + Math.round(this.rangeHeightDualKnobs.lower % 12) + '"'
    }
  }

  heightUpper() {
    if (this.user?.show_height_cm) {
      return this.rangeHeightDualKnobs.upper > 83
             ? 'Max'
             : Math.floor(this.rangeHeightDualKnobs.upper * 2.54)
    } else {
      return this.rangeHeightDualKnobs.upper > 83
              ? 'Max'
              : Math.floor(this.rangeHeightDualKnobs.upper / 12) + "' " + Math.round(this.rangeHeightDualKnobs.upper % 12) + '"'
    }
  }

  toggleShowMe(){
    this.api.profileUpdate((user) => {
      this.user = user
    },
    localStorage.getItem('user'),
    { is_hidden: !this.user.is_hidden })
  }

  toggleShowDistance(unit){
    this.api.profileUpdate((user) => {
      this.user = user
    },
    localStorage.getItem('user'),
    { show_distance_km: unit == 'km' })
  }

  toggleShowHeight(unit){
    this.api.profileUpdate((user) => {
      this.user = user
    },
    localStorage.getItem('user'),
    { show_height_cm: unit == 'cm' })
  }

  resetTutorials() {
    this.api.profileUpdate(() => {
      alert('Tutorial popups have been re-activated. To hide them again, just click "Next" on each.')
      this.navigateToDeck.next()
    }, localStorage.getItem('user'), {
      hide_tutorial_swiping: false,
      hide_tutorial_matchlimit: false,
      hide_tutorial_matches: false,
      hide_tutorial_endconvo: false
    })
  }

  ngOnInit() {
    this.isLoading = true
  }

  goToPage(page) {
    this.navCtrl.navigateForward([page]);
  }

  goToLogin() {
    this.route.navigate(['login']);
  }
  goToPreLogin() {
    this.route.navigate(['pre-tut-login']);
  }

  logout() {
    this.api.logout()
    this.route.navigate(['login']);
  }

  gotoLegal() {
    this.service.openModal(TermsComponent, '', 'custom-bg-class');
  }
}
