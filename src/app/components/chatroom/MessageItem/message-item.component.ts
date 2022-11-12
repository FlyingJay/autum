import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from "@angular/core";
import { MessageType } from "@amityco/js-sdk";

import { NavParams } from '@ionic/angular';
import { TextContent } from "./Content/text-content.component";
import { LinkContent } from "./Content/link-content.component";
import { ImageContent } from "./Content/image-content.component";
import { FileContent } from "./Content/file-content.component";
import { currentUserId } from '@app/components/chatroom/client';

import { short } from "tiny-human-time";
import { environment } from '@env/environment';

import * as moment from 'moment';

const MAPPING = {
  [MessageType.Text]: TextContent,
  [MessageType.Image]: ImageContent,
  [MessageType.File]: FileContent,
  ['link']: LinkContent
};

@Component({
  selector: "app-message-item",
  templateUrl: "./message-item.component.html",
  styleUrls: ["./message-item.component.css"]
})
export class MessageItem {
  @ViewChild("content", { read: ViewContainerRef }) content: ViewContainerRef;
  @Input() msg;
  @Input() previousMsg;
  currentUserId = currentUserId;
  timeString = "0s";
  timeStringLonger = "0s";
  showGroupTimestamp = (Math.random() > 0.7) //30% of message groups will have a timestamp
  otherUser;
  isFirstInGroup = false
  showTimestamp = false

  constructor(private resolver: ComponentFactoryResolver, private changeDetectorRef: ChangeDetectorRef, public navParams: NavParams) {}

  ngOnChanges() {
    this.timeString = short(Date.now(), this.msg.createdAt);
    this.timeStringLonger = moment(this.msg.createdAt).format('dddd, MMMM D @ H:mm')
    this.otherUser = this.navParams.get('otherUser')
  }

  ngAfterViewInit() {
    Promise.resolve(null).then(() => {
      this.renderContent()

      if (this.previousMsg && this.msg.user.userId !== this.previousMsg.user.userId) {
        this.isFirstInGroup = true
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  renderContent() {
    this.content.clear();

    let classType: any = MAPPING[this.msg.type];
    if (this.msg.type == MessageType.Text && this.isValidHttpUrl(this.msg.data.text)){
      //Use custom "link" template
      classType = MAPPING['link']
    }

    const factory = this.resolver.resolveComponentFactory(classType);
    const component: any = this.content.createComponent(factory).instance;
    component.data = this.msg.data;
    component.fileId = this.msg.fileId;

    component.background = 'whitesmoke'
    if (this.msg.user.userId !== localStorage.getItem('user')) {
      component.background = environment.gradients[this.otherUser.gradient]
    }
  }

  isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  toggleShowTimestamp() {
    this.showTimestamp = !this.showTimestamp
  }
}
