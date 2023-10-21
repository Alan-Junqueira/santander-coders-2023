import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks-kambam',
  templateUrl: './tasks-kambam.component.html',
  styleUrls: ['./tasks-kambam.component.scss'],
})
export class TasksKambamComponent {
  public boards = [
    "todo",
    "inProgress",
    "done"
  ]
  @Input() public tasks: Task[] = [];
}
