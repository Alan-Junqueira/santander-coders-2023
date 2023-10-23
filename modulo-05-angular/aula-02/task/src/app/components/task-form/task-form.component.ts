import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITask } from 'src/app/app.component';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  formErr: { [key: string]: string } = {};
  minDate = new Date();

  @Output() addTask = new EventEmitter();

  public newTask: Task = new Task('', '', new Date(), 'todo');

  submitTask(form: NgForm) {
    const formControls = form.controls;

    const isTitleInvalid = formControls['title'].invalid;
    const isDescriptionInvalid = formControls['description'].invalid;
    const isDateInvalid = formControls['date'].invalid;
    const isStatusInvalid = formControls['status'].invalid;

    this.formErr = {};

    console.log(form.controls['title']?.errors)

    if (isTitleInvalid) {
      this.formErr['title'] = 'Title is required';
    }

    if (isDescriptionInvalid) {
      this.formErr['description'] = 'Description is required';
    }

    if (isDateInvalid) {
      this.formErr['date'] = 'Date is required';
    }

    if (isStatusInvalid) {
      this.formErr['status'] = 'Status is required';
    }

    console.log(this.formErr);

    this.addTask.emit({ ...this.newTask });
  }
}
