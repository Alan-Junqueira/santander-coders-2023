import { Component, Input, OnInit } from '@angular/core';
import { TStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss'],
})
export class TaskStatusComponent {
  @Input() status!: TStatus;
}
