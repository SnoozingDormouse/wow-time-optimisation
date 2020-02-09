import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowlandsFlyingComponent } from './shadowlands-flying.component';

describe('ShadowlandsFlyingComponent', () => {
  let component: ShadowlandsFlyingComponent;
  let fixture: ComponentFixture<ShadowlandsFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowlandsFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowlandsFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
