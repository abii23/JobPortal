import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWiseReportComponent } from './post-wise-report.component';

describe('PostWiseReportComponent', () => {
  let component: PostWiseReportComponent;
  let fixture: ComponentFixture<PostWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
