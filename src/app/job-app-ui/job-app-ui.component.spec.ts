import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppUIComponent } from './job-app-ui.component';

describe('JobAppUIComponent', () => {
  let component: JobAppUIComponent;
  let fixture: ComponentFixture<JobAppUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobAppUIComponent]
    });
    fixture = TestBed.createComponent(JobAppUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
