import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list-updated',
  templateUrl: './task-list-updated.component.html',
  styleUrls: ['./task-list-updated.component.scss'],
})
export class TaskListUpdatedComponent {
  @Input() public tasks: Task[] = [];

  @Output() updateTask = new EventEmitter<Task & { index: number }>();

  handleUpdateTask(task: Task & { index: number }) {
    this.updateTask.emit(task);
  }
}
