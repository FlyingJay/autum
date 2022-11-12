import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceListComponent implements OnInit {
  @Input("experiences") experiences: any = [];
  @Output() onTagClicked = new EventEmitter<void>();
  tags: any = []

  constructor() {}

  ngOnInit() {}

  ngOnChanges(){
    const newIds = this.experiences.map(i => i.experience.id)
    const tagIds = this.tags.map(i => i.experience.id)

    const diffNew = newIds.filter((obj) => tagIds.indexOf(obj) == -1);
    const diffTags = tagIds.filter((obj) => newIds.indexOf(obj) == -1);

    if (diffNew.concat(diffTags).length > 0) {
      this.tags = this.experiences
    }
  }

  tagClicked() {
     this.onTagClicked.next()
  }
}
