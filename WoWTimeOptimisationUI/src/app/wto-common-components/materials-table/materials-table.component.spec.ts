import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsTableComponent } from './materials-table.component';

describe('MaterialsTableComponent', () => {
  let component: MaterialsTableComponent;
  let fixture: ComponentFixture<MaterialsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
