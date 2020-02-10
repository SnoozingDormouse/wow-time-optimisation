import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedExpansionPanelsWithTablesComponent } from './nested-expansion-panels-with-tables.component';

describe('NestedExpansionPanelsWithTablesComponent', () => {
  let component: NestedExpansionPanelsWithTablesComponent;
  let fixture: ComponentFixture<NestedExpansionPanelsWithTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedExpansionPanelsWithTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedExpansionPanelsWithTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
