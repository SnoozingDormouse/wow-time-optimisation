import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingSummaryComponent } from './flying-summary.component';

describe('FlyingSummaryComponent', () => {
  let component: FlyingSummaryComponent;
  let fixture: ComponentFixture<FlyingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
