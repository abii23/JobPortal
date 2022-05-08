import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseUserComponent } from './location-wise-user.component';

describe('LocationWiseUserComponent', () => {
  let component: LocationWiseUserComponent;
  let fixture: ComponentFixture<LocationWiseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWiseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWiseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
