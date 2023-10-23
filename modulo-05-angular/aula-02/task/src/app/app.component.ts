import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.model';

export interface ITask {
  price: string;
  description: string;
  date: Date;
  category?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [];
  chosenTask: Task | null = null;
  chosenTasks: Task[] = [];
  // listTask: Array<IListTask> = [];

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  onChoseTask(task: Task | null) {
    if (task) {
      this.chosenTasks.push(task);
      this.chosenTask = new Task(task.title, task.description, task.date, task.status);
    } else {
      this.chosenTask = null;
    }
  }
}
