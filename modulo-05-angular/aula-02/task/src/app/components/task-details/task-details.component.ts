import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent {
  @Input() task: Task | null = null;

  @Output() choseTask = new EventEmitter();

  handleChoseTask() {
    this.choseTask.emit(null);
  }
}
