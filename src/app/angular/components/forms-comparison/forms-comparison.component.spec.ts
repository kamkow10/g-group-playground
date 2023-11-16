import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComparisonComponent } from './forms-comparison.component';

describe('FormsComparitionComponent', () => {
  let component: FormsComparisonComponent;
  let fixture: ComponentFixture<FormsComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
