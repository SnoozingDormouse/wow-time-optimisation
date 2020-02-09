import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionFlyingComponent } from './legion-flying.component';

describe('LegionFlyingComponent', () => {
  let component: LegionFlyingComponent;
  let fixture: ComponentFixture<LegionFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegionFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
