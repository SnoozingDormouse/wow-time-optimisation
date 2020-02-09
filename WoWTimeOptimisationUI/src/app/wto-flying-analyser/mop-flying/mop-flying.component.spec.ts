import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopFlyingComponent } from './mop-flying.component';

describe('MopFlyingComponent', () => {
  let component: MopFlyingComponent;
  let fixture: ComponentFixture<MopFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
