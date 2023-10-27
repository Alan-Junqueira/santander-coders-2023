import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListUpdatedComponent } from './task-list-updated.component';

describe('TaskListUpdatedComponent', () => {
  let component: TaskListUpdatedComponent;
  let fixture: ComponentFixture<TaskListUpdatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListUpdatedComponent]
    });
    fixture = TestBed.createComponent(TaskListUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
