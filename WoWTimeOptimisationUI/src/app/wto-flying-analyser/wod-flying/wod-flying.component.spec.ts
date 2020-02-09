import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodFlyingComponent } from './wod-flying.component';

describe('WodFlyingComponent', () => {
  let component: WodFlyingComponent;
  let fixture: ComponentFixture<WodFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
