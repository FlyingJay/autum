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
import { Appsflyer } from '@ionic-native/appsflyer/ngx';
import { MatchComponent } from '@app/components/match/match.component';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova'
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser'

import { OAuthProvider, IOAuthOptions } from "ng2-cordova-oauth/provider";

export interface ITikTokOptions extends IOAuthOptions {
    authType?: string;
}
class TikTok extends OAuthProvider {
    options: ITikTokOptions;
    protected authUrl: string = 'https://open-api.tiktok.com/platform/oauth/connect/';
    protected defaults: Object = {
      responseType: 'code'
    };

    constructor(options: ITikTokOptions = {}) {
        super(options);

        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error(`A ${this.name} app scope must exist`);
        }

        const callback_uri = 'autum://login'

        let url = 'https://open-api.tiktok.com/platform/oauth/connect/';
        url += '?client_key=' + environment.tiktok.clientKey;
        url += '&scope=user.info.basic,video.list';
        url += '&response_type=code';
        url += '&redirect_uri=' + callback_uri;
        url += '&state=' + Math.random().toString(36).substring(7);
        this.authUrl = url;
    }

    protected optionsToDialogUrl(options) {
      let url = super.optionsToDialogUrl(options);

      if (options.authType) {
          url += `&auth_type=${options.authType}`;
      }

      return url;
    }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements OnInit {
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

  constructor(public navController: NavController, public route: Router, public service: DataService, public platform: Platform, private statusBar: StatusBar, private appsflyer: Appsflyer) {
    if (this.platform.is('android')) {
      statusBar.styleLightContent();
      this.statusBar.overlaysWebView(false);
    }
    if (this.platform.is('ios')) {
      statusBar.styleDefault();
    }
    
    this.platform.ready().then(() => {
      this.appsflyer.initSdk({
        devKey: 'QqeuP3ckZQjXrMFkjVAqbB',
        appId: '1599884953',
        isDebug: environment.production,
        waitForATTUserAuthorization: 10
      });
    });

    this.showContent = true;
    this.data = environment.LOGIN_SLIDES_DATA;


  }

  ionViewDidEnter() {
    let video = <HTMLVideoElement> document.getElementById('backgroundVideo')
    video.play()
  }

  ngOnInit() {
 if (localStorage.getItem('user')) {
       this.navController.navigateRoot('/home', { animated: false });
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

  toggleContent() {
    // this.showContent = !this.showContent
    this.service.openModal(ToggleLoginComponent, '', 'modalBackground');
  }

  loginWithPhone() {
    let video = <HTMLVideoElement> document.getElementById('backgroundVideo')
    video.pause();

    this.route.navigate(['login-phone']);

    //Reset video to original location to match background-image, in case user comes "back"
    setTimeout(() => {
        video.currentTime = 0;
    }, 1000)
    
    setTimeout(() => {
        //Magic refresh line that makes cropper and audio uploads work
        history.go(0);
    })
  }

  /*
  loginWithTiktok() {
    const oauth = new OauthCordova();

    const provider = new TikTok({
        clientId: environment.tiktok.clientKey,
        appScope: ['user.info.basic','video.list'],
        redirectUri: 'https://api.fallinlove.app/app',
        responseType: 'code',
        state: Math.random().toString(36).substring(7)
    });

    this.platform.ready().then(() => {
        oauth.logInVia(provider).then((success) => {
            alert(JSON.stringify(success));
        }, (error) => {
            alert(JSON.stringify(error));
        });
        this.tiktokLogin().then(success => {
            alert(success.access_token);
        }, (error) => {
            alert(error);
        });
    });
  }

  tiktokLogin(): Promise<any> {
    return new Promise(function(resolve, reject) {
        const callback_uri = 'autum://login'

        let url = 'https://open-api.tiktok.com/platform/oauth/connect/';
        url += '?client_key=' + environment.tiktok.clientKey;
        url += '&scope=user.info.basic,video.list';
        url += '&response_type=code';
        url += '&redirect_uri=' + callback_uri;
        url += '&state=' + Math.random().toString(36).substring(7);

        var browserRef = window.cordova.InAppBrowser.open(url, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
        browserRef.addEventListener("loadstart", (event) => {
            alert(JSON.parse(event))
            if ((event.url).indexOf(callback_uri) === 0) {
                browserRef.removeEventListener("exit", (event) => {});
                browserRef.close();
                var responseParameters = ((event.url).split("#")[1]).split("&");
                var parsedResponse = {};
                for (var i = 0; i < responseParameters.length; i++) {
                    parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                }
                alert(parsedResponse)
                if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
                    resolve(parsedResponse);
                } else {
                    reject("Problem authenticating with TikTok");
                }
            }
        });
        browserRef.addEventListener("exit", function(event) {
            reject("The TikTok sign in flow was canceled");
        });
    });
  }*/

  loginWithTiktok() {
    window.addEventListener('message', function(event) {
      console.log(event)
      if (event.data.match(/^oauth::/)) {
        var data = JSON.parse(event.data.substring(7));
        var data = JSON.parse(event.data);
        var data = JSON.parse(event.data.code);

        // Use data.code
      }
    })

    let url = 'https://open-api.tiktok.com/platform/oauth/connect/';
    url += '?client_key=' + environment.tiktok.clientKey;
    url += '&scope=user.info.basic,video.list';
    url += '&redirect_uri=https%3A%2F%2Fapi.fallinlove.app%2Ftiktok';
    url += '&state=' + Math.random().toString(36).substring(7);
    url += '&response_type=code';

    window.open(url, 'oauth:tiktok', '')
    //window.location.replace(url)
  }

  goToSignup() {
    this.route.navigate(['signup-phone']);
  }

  gotAccountRecovery() {
    this.route.navigate(['account-recovery']);
  }
}

