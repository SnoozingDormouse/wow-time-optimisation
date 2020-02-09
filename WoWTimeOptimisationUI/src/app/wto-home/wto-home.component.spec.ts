import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtoHomeComponent } from './wto-home.component';

describe('WtoHomeComponent', () => {
  let component: WtoHomeComponent;
  let fixture: ComponentFixture<WtoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
