
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TinderIconsComponent } from '@app/components/tinder-icons/tinder-icons.component';
import { ShareProfileComponent } from '@app/components/share-profile/share-profile.component';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from '@app/components/report/report.component';
import { FeedPopoverComponent } from '@app/components/feed-popover/feed-popover.component';
import { MatchComponent } from '@app/components/match/match.component';
import { ToggleLoginComponent } from '@app/components/toggle-login/toggle-login.component';
import { RefreshComponent } from '@app/components/refresh/refresh.component';
import { LightBoxComponent } from '@app/components/lightbox/lightbox.component';
import { TermsComponent } from '@app/components/terms/terms.component';
import { CropperComponent } from '@app/components/cropper/cropper.component';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EndConvoComponent } from '@app/components/end-convo/end-convo.component';
import { API } from '@app/services/api.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { ChatRoomComponent } from '@app/components/chatroom/chatroom.component';
import { FilePreview } from '@app/components/chatroom/Attachment/Preview/file-preview.component';
import { ImagePreview } from '@app/components/chatroom/Attachment/Preview/image-preview.component';
import { FileContent } from '@app/components/chatroom/MessageItem/Content/file-content.component';
import { TextContent } from '@app/components/chatroom/MessageItem/Content/text-content.component';
import { LinkContent } from '@app/components/chatroom/MessageItem/Content/link-content.component';
import { ImageContent } from '@app/components/chatroom/MessageItem/Content/image-content.component';
import { IconLike } from '@app/components/chatroom/Icons/icons.component';
import { IconImageUpload } from '@app/components/chatroom/Icons/icons.component';
import { IconFileUpload } from '@app/components/chatroom/Icons/icons.component';
import { IconAmity } from '@app/components/chatroom/Icons/icons.component';
import { IconSynced } from '@app/components/chatroom/Icons/icons.component';
import { IconSyncing } from '@app/components/chatroom/Icons/icons.component';
import { IconCare } from '@app/components/chatroom/Icons/icons.component';
import { IconLove } from '@app/components/chatroom/Icons/icons.component';
import { IconMember } from '@app/components/chatroom/Icons/icons.component';
import { IconSend } from '@app/components/chatroom/Icons/icons.component';
import { IconSendRecord } from '@app/components/chatroom/Icons/icons.component';
import { IconAttachment } from '@app/components/chatroom/Icons/icons.component';
import { woltNavigationAnimation } from '@app/animations/navigation-animation';
import { Appsflyer } from "@ionic-native/appsflyer/ngx";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//SENTRY START
import * as Sentry from "sentry-cordova";
import { ErrorHandler } from "@angular/core";

export class SentryIonicErrorHandler extends ErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}
Sentry.init({ dsn: "https://bc6ec7a0c3614af09e95457286a2c90e@o1093419.ingest.sentry.io/6112673" });
//SENTRY END

@NgModule({
  declarations: [
    AppComponent,
    TinderIconsComponent,
    ShareProfileComponent,
    LightBoxComponent,
    EndConvoComponent,
    ReportComponent,
    FeedPopoverComponent,
    MatchComponent,
    ToggleLoginComponent,
    RefreshComponent,
    TermsComponent
    ],
  entryComponents: [
    TinderIconsComponent,
    LightBoxComponent,
    ShareProfileComponent,
    EndConvoComponent,
    ReportComponent,
    FeedPopoverComponent,
    MatchComponent,
    ToggleLoginComponent,
    TermsComponent,
    RefreshComponent,
    CropperComponent,
    ChatRoomComponent,
    FilePreview,
    ImagePreview,
    FileContent,
    TextContent,
    LinkContent,
    ImageContent,
    IconLike,
    IconImageUpload,
    IconFileUpload,
    IconAmity,
    IconSynced,
    IconSyncing,
    IconCare,
    IconLove,
    IconMember,
    IconSend,
    IconSendRecord,
    IconAttachment
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      navAnimation: woltNavigationAnimation,
      }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    API,
    Geolocation,
    StatusBar,
    SplashScreen,
    Device,
    Media,
    File,
    //FCM,
    Deeplinks,
    Appsflyer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: SentryIonicErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

