import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Router } from '@angular/router';

import { LoginPageComponent } from '@app/pages/login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    public route: Router,
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navController: NavController,
    public deepLinks: Deeplinks
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.navController.navigateRoot('/home');
      if ( window.localStorage ) {
        if( !localStorage.getItem('firstLoad') ) {
          localStorage.setItem('firstLoad', 'true')
          window.location.replace(window.location.href)
        } else {
          localStorage.removeItem('firstLoad');
        }
      }
    }
  }

}
