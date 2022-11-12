import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestListComponent implements OnInit {
  @Input("interests") interests: any = [];
  @Output() onTagClicked = new EventEmitter<void>();
  tags: any = []

  constructor() {}

  ngOnInit() {}

  ngOnChanges(){
    const newIds = this.interests.map(i => Number.isInteger(i) ? i : i.interest.id)
    const tagIds = this.tags.map(i => Number.isInteger(i) ? i : i.interest.id)

    const diffNew = newIds.filter((obj) => tagIds.indexOf(obj) == -1);
    const diffTags = tagIds.filter((obj) => newIds.indexOf(obj) == -1);

    if (diffNew.concat(diffTags).length > 0) {
      this.tags = this.interests
    }
  }

  tagClicked() {
     this.onTagClicked.next()
  }
}
