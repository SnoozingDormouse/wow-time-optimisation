import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbcFlyingComponent } from './tbc-flying.component';

describe('TbcFlyingComponent', () => {
  let component: TbcFlyingComponent;
  let fixture: ComponentFixture<TbcFlyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbcFlyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbcFlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
