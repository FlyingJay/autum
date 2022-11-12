
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedPopoverComponent } from './feed-popover.component';

describe('FeedPopoverComponent', () => {
  let component: FeedPopoverComponent;
  let fixture: ComponentFixture<FeedPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPopoverComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
