import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfaFlyingComponent } from './bfa-flying.component';

describe('BfaFlyingComponent', () => {
  let component: BfaFlyingComponent;
  let fixture: ComponentFixture<BfaFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfaFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfaFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
