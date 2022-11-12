import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { NavParams } from '@ionic/angular';

declare let require: any;
const introJs = require('intro.js');

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatRoomComponent implements OnInit {
  channelId: string;

  constructor(public navParams: NavParams) {
    this.channelId = navParams.get('amity_channel')
  }

  ngOnInit() {

  }
}