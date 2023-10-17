import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  name = 'teste';
  isVisible = true;
  buttonText = this.isVisible ? "Esconde Texto" : "Mostra Texto";

  @Input() tasks: Task[] = [];

  @Output() choseTask = new EventEmitter();

  mostrarLista() {
    this.isVisible = !this.isVisible;
  }

  handleChoseTask(task: Task) {
    this.choseTask.emit(task);
  }
}
