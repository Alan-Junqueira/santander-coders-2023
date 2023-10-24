import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFormReactiveComponent } from './tasks-form-reactive.component';

describe('TasksFormReactiveComponent', () => {
  let component: TasksFormReactiveComponent;
  let fixture: ComponentFixture<TasksFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksFormReactiveComponent]
    });
    fixture = TestBed.createComponent(TasksFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
