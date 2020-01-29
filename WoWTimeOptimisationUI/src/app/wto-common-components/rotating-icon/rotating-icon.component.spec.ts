import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingIconComponent } from './rotating-icon.component';

describe('RotatingIconComponent', () => {
  let component: RotatingIconComponent;
  let fixture: ComponentFixture<RotatingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
