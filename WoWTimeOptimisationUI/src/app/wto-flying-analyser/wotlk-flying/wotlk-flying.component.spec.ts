import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WotlkFlyingComponent } from './wotlk-flying.component';

describe('WotlkFlyingComponent', () => {
  let component: WotlkFlyingComponent;
  let fixture: ComponentFixture<WotlkFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WotlkFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WotlkFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
