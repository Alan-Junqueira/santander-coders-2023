import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task: Task = {} as Task;
  @Input() index: number = 0;

  @Output() updateTask = new EventEmitter<Task>();

  handleUpdateTask(task: Task) {
    console.log('task-card', task);
    this.updateTask.emit({ ...task });
  }
}
