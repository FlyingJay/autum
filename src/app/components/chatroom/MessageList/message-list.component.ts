import { Component, Input, NgZone, HostListener, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { MessageRepository } from "@amityco/js-sdk";
import { environment } from '@env/environment';
import { NavParams } from '@ionic/angular';

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"]
})
export class MessageList  {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() channelId;
  collection;
  messages = [];

  constructor(private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnChanges() {
    this.collection?.dispose();
    this.collection = MessageRepository.queryMessages({
      channelId: this.channelId
    });

    this.collection.on("dataUpdated", (messages) => {
      this.ngZone.run(() => {
        this.messages = this.collection.models;
        setTimeout(() => {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }, 0)
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.collection?.dispose();
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
