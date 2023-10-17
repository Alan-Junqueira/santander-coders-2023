import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/app.component';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter();

  public newTask: Task = new Task('', '', new Date(), 'todo');

  submitTask() {
    this.addTask.emit({ ...this.newTask });
  }
}
