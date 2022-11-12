
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToggleLoginComponent } from './toggle-login.component';

describe('ToggleLoginComponent', () => {
  let component: ToggleLoginComponent;
  let fixture: ComponentFixture<ToggleLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
