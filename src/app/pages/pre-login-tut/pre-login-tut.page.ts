import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from '@app/services/data.service';
import { ToggleLoginComponent } from '@app/components/toggle-login/toggle-login.component';
import { NgForm, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Platform, NavController } from '@ionic/angular';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { validateEmail } from '@forms/validators';
import { MatchComponent } from '@app/components/match/match.component';

@Component({
  selector: 'app-pre-login',
  templateUrl: './pre-login-tut.page.html',
  styleUrls: ['./pre-login-tut.page.scss'],
})

export class PreLoginPageComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 380,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2000
    }
  };
  showContent: any;
  data: any = [];


  constructor(public route: Router, public service: DataService, public platform: Platform, private statusBar: StatusBar,public navController: NavController) {
    
    if (this.platform.is('android')) {
      statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
    }
    if (this.platform.is('ios')) {
      statusBar.styleDefault();
    }
  }

  ionViewDidEnter() {
  }

  ngOnInit() {
   const checkView = localStorage.getItem('firstRun');
    if (checkView) {
         this.navController.navigateRoot('/login', { skipLocationChange: true });
    }
    localStorage.setItem('firstRun', '1');
  }

  goToLogin() {
    this.route.navigate(['login']);
  }

}


