import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryReportComponent } from './subcategory-report.component';

describe('SubcategoryReportComponent', () => {
  let component: SubcategoryReportComponent;
  let fixture: ComponentFixture<SubcategoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
