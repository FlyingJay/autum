import { Component, Input } from "@angular/core";

@Component({
  selector: "app-link-content",
  templateUrl: "./link-content.component.html"
})
export class LinkContent {
  @Input() data;
  @Input() fileId;
  @Input() background;
  @Input() isFirstInGroup;
}
