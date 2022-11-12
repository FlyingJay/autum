
import { Component, AfterViewInit } from '@angular/core';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';


@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.page.html',
  styleUrls: ['./profile-preview.page.scss'],
})
export class ProfilePreviewPageComponent implements AfterViewInit {
  user: any;
  gradients: any;
  slideIndex = 0;
  slideImages = false;
  isLoading = true;
  isCardFlipped = false;

  constructor(public api:API) {
    this.gradients = environment.gradients;
  }

  loadData() {
    this.api.me((user) => {
      this.isLoading = false;
      this.user = user
    });
  }

  flip(){
    if (!this.slideImages) {
      this.isCardFlipped = !this.isCardFlipped
    }
  }

  slideImageTo(index) {
    this.slideIndex = index
    this.slideImages = true
    setTimeout(() => {
      this.slideImages = false
    }, 100)
  }

  slideImageLeft(profile) {
    if (this.slideIndex > 0) {
      this.slideIndex--
    } else {
      this.slideIndex = profile.images.length-1;
    }
    this.slideImages = true
    setTimeout(() => {
      this.slideImages = false
    }, 100)
  }

  slideImageRight(profile) {
    if (this.slideIndex+1 < profile.images?.length) {
      this.slideIndex++
    } else {
      this.slideIndex = 0;
    }
    this.slideImages = true
    setTimeout(() => {
      this.slideImages = false
    }, 100)
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.loadData();
  }

  ngAfterViewInit() {

  };
}



