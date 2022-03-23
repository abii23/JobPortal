import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRegistrationComponent } from './category-registration.component';

describe('CategoryRegistrationComponent', () => {
  let component: CategoryRegistrationComponent;
  let fixture: ComponentFixture<CategoryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
