import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list-updated',
  templateUrl: './task-list-updated.component.html',
  styleUrls: ['./task-list-updated.component.scss'],
})
export class TaskListUpdatedComponent implements OnInit {

  @Input() public todoTasks: Task[] = [];
  @Input() public inProgressTasks: Task[] = [];
  @Input() public doneTasks: Task[] = [];

  @Output() updateTask = new EventEmitter<Task>();

  handleUpdateTask(task: Task) {
    console.log('task-list-updated', task);
    this.updateTask.emit({ ...task });
  }

  ngOnInit(): void {
    console.log(this.todoTasks)
    console.log(this.inProgressTasks)
    console.log(this.doneTasks)
  }
}
