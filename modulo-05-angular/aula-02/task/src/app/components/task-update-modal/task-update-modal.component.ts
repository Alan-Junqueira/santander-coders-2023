import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-update-modal',
  templateUrl: './task-update-modal.component.html',
  styleUrls: ['./task-update-modal.component.scss'],
})
export class TaskUpdateModalComponent implements OnInit{
  @Input() task: Task = {} as Task;
  @Input() index: number = 0;

  @Output() updateTask = new EventEmitter<Task>();

  isModalOpen: boolean = false;

  taskToUpdate: FormGroup = this.fb.group({
    date: [new Date(), [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    status: ['todo', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(5)]],
    tags: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  handleUpdateTask() {
    console.log('task-update-modal');
    this.updateTask.emit({ ...this.taskToUpdate.value, id: this.task.id });
    this.closeModal();
  }

  openModal() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  get tags() {
    return this.taskToUpdate.get('tags') as FormArray;
  }

  addTag(value = '') {
    this.tags.push(this.fb.control(value, Validators.required));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  ngOnInit() {
    console.log(this.task);
    this.task.tags.forEach((tag) => this.addTag(tag));
    this.taskToUpdate.patchValue(this.task);
  }
}
