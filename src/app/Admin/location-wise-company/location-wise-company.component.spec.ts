import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseCompanyComponent } from './location-wise-company.component';

describe('LocationWiseCompanyComponent', () => {
  let component: LocationWiseCompanyComponent;
  let fixture: ComponentFixture<LocationWiseCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWiseCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWiseCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
