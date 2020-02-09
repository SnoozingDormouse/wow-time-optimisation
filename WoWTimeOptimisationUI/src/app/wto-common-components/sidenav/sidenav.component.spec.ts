import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTreeControlComponent } from './sidenav.component';

describe('SidenavTreeControlComponent', () => {
  let component: SidenavTreeControlComponent;
  let fixture: ComponentFixture<SidenavTreeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavTreeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavTreeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
