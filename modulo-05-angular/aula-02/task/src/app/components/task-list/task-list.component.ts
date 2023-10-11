import { Component, Input } from '@angular/core';
import { IListTask } from 'src/app/app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  name = 'teste';

  isVisible = true;

  @Input() tasks: IListTask[] = []


  mostrarLista() {
   this.isVisible = !this.isVisible;
  }

}