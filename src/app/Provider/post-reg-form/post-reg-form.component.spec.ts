import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegFormComponent } from './post-reg-form.component';

describe('PostRegFormComponent', () => {
  let component: PostRegFormComponent;
  let fixture: ComponentFixture<PostRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
