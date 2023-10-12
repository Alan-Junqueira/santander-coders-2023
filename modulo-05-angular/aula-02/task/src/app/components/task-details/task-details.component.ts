import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListTask } from 'src/app/app.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent {
  @Input() task: IListTask | null = null;

  @Output() choseTask = new EventEmitter();

  handleChoseTask() {
    this.choseTask.emit(null);
  }
}
