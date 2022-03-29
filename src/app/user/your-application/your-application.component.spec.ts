import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourApplicationComponent } from './your-application.component';

describe('YourApplicationComponent', () => {
  let component: YourApplicationComponent;
  let fixture: ComponentFixture<YourApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
