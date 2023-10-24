import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClass, Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks-form-reactive',
  templateUrl: './tasks-form-reactive.component.html',
  styleUrls: ['./tasks-form-reactive.component.scss'],
})
export class TasksFormReactiveComponent {
  @Output() addTask = new EventEmitter<Task>();

  // formTask: FormGroup = this.fb.group<TaskType[]>({
  formTask: FormGroup = this.fb.group<Task>(
    {
      date: new Date(),
      description: '',
      status: 'todo',
      title: '',
    },
    {
      validators: ({ get }) => {
        const title = get('title');
        console.log(title)
        return title ? { titleRequired: true } : null;
      },
      updateOn: "blur"
    }
  );

  constructor(private fb: FormBuilder) {}

  submitTask() {
    this.addTask.emit({ ...this.formTask.value });
  }
}
