import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzerothFlyingComponent } from './azeroth-flying.component';

describe('AzerothFlyingComponent', () => {
  let component: AzerothFlyingComponent;
  let fixture: ComponentFixture<AzerothFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzerothFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzerothFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
