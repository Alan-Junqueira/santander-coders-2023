import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksKambamComponent } from './tasks-kambam.component';

describe('TasksKambamComponent', () => {
  let component: TasksKambamComponent;
  let fixture: ComponentFixture<TasksKambamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksKambamComponent]
    });
    fixture = TestBed.createComponent(TasksKambamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
