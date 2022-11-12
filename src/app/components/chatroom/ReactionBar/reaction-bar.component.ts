import { Component, Input, OnInit } from "@angular/core";
import * as Reactions from '@app/components/chatroom/reactions';

@Component({
  selector: "app-reaction-bar",
  templateUrl: "./reaction-bar.component.html",
  styleUrls: ["./reaction-bar.component.css"]
})
export class ReactionBar implements OnInit {
  @Input() reactionsCount;
  @Input() reactions = {};
  REACTION_ICONS = Reactions.REACTION_ICONS;
  REACTION_ICONS_LENGTH = Reactions.REACTION_ICONS_LENGTH;

  ngOnInit () {
    this.REACTION_ICONS = Reactions.REACTION_ICONS;
    this.REACTION_ICONS_LENGTH = Reactions.REACTION_ICONS_LENGTH;
    console.log(this.REACTION_ICONS)
    console.log(this.REACTION_ICONS_LENGTH)
  }
}
