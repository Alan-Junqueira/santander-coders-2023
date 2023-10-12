import { Component, OnInit } from '@angular/core';

export interface IListTask {
  price: string;
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
  chosenTask: IListTask | null = null;
  // listTask: Array<IListTask> = [];

  onAddTask(task: IListTask) {
    this.listTask.push(task);
  }

  onChoseTask(task: IListTask | null) {
    this.chosenTask = task;
  }
}
