import { Component, Input, NgZone, HostListener, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { MessageRepository } from "@amityco/js-sdk";
import { NavParams, Platform } from '@ionic/angular';
import { environment } from '@env/environment';


@Component({
  selector: "app-chat-room",
  templateUrl: "./chat-room.component.html",
  styleUrls: ["./chat-room.component.css"]
})
export class ChatRoom {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() channelId;
  collection;
  messages = [];
  background = '#FFF'

  constructor(public navParams: NavParams, private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef, private platform: Platform) {
    let otherUser = this.navParams.get('otherUser')
    this.background = environment.gradients[otherUser.gradient]

    this.platform.keyboardDidShow.subscribe(ev => {
      this.scrollToBottom()
    });
  }

  ngOnChanges() {
    this.collection?.dispose();
    this.collection = MessageRepository.queryMessages({
      channelId: this.channelId
    });

    this.collection.on("dataUpdated", (messages) => {
      this.ngZone.run(() => {
        this.messages = this.collection.models;
        this.scrollToBottom()
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.collection?.dispose();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }, 0)
  }

  @HostListener("scroll", ["$event"])
  onScroll(e) {
    if (!this.collection.hasMore) return;

    const el = e.target;
    const top = el.scrollHeight - el.clientHeight;
    const scroll = -el.scrollTop;

    if (top - scroll <= 1) {
      this.collection.nextPage();
    }
  }

  messageId(index, obj) {
    return obj.messageId;
  }
}
