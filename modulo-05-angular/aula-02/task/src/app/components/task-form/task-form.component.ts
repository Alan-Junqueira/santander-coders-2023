import { Component, EventEmitter, Output } from '@angular/core';
import { IListTask } from 'src/app/app.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter();

  public newTask = {
    price: '',
    description: '',
    date: new Date(),
  };

  submitTask() {
    this.addTask.emit({ ...this.newTask });
  }
}
