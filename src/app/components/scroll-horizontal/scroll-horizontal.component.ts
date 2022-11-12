import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scroll-horizontal',
  templateUrl: './scroll-horizontal.component.html',
  styleUrls: ['./scroll-horizontal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollHorizontalComponent implements OnInit {
  @Input("width") width: string = '100%';
  @Input("disableScrolling") disableScrolling: boolean = false;

  constructor() { }

  ngOnInit() {}

}
