import { Component } from '@angular/core';

export interface IListTask {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: IListTask[] = [];
 // listTask: Array<IListTask> = [];



  onAddTask(task: IListTask) {
    this.listTask.push(task)
  }
}
