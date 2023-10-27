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
    console.log(task)
    this.listTask.push(task);
  }

  onChoseTask(task: Task | null) {
    if (task) {
      this.chosenTasks.push(task);
      this.chosenTask = new Task(
        task.title,
        task.description,
        task.date,
        task.status,
        task.tags,
        task.id
      );
    } else {
      this.chosenTask = null;
    }
  }

  onUpdateTask(task: Task) {
    const taskIndex = this.listTask.findIndex((t) => t.id === task.id);
    console.log('app-component', task);
    this.listTask.splice(taskIndex, 1, task);
  }

  todoTasks() {
    return this.listTask.filter((task) => task.status === 'todo');
  }

  inProgressTasks() {
    return this.listTask.filter((task) => task.status === 'inProgress');
  }

  doneTasks() {
    return this.listTask.filter((task) => task.status === 'done');
  }
}
