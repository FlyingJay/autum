import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EndConvoComponent } from './end-convo.component';

describe('EndConvoComponent', () => {
  let component: EndConvoComponent;
  let fixture: ComponentFixture<EndConvoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EndConvoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndConvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
