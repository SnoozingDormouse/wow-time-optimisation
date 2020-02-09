import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataFlyingComponent } from './cata-flying.component';

describe('CataFlyingComponent', () => {
  let component: CataFlyingComponent;
  let fixture: ComponentFixture<CataFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
