import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListTask } from 'src/app/app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  name = 'teste';
  isVisible = true;

  @Input() tasks: IListTask[] = [];

  @Output() choseTask = new EventEmitter();

  mostrarLista() {
    this.isVisible = !this.isVisible;
  }

  handleChoseTask(task: IListTask) {
    this.choseTask.emit(task);
  }
}
