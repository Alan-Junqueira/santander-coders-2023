import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { generateRandomId } from 'src/helpers/generate-random-id';

@Component({
  selector: 'app-tasks-form-reactive',
  templateUrl: './tasks-form-reactive.component.html',
  styleUrls: ['./tasks-form-reactive.component.scss'],
})
export class TasksFormReactiveComponent {
  @Output() addTask = new EventEmitter<Task>();
  //   import { z } from 'zod';

  // function zodValidator(schema: z.ZodType<any, any>) {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     try {
  //       schema.parse(control.value);
  //       return null;
  //     } catch (error) {
  //       return { zod: error.message };
  //     }
  //   };
  // }

  // // Exemplo de uso
  // const taskSchema = z.object({
  //   date: z.date().required(),
  //   description: z.string().min(10).required(),
  //   status: z.string().required(),
  //   title: z.string().min(5).required(),
  // });

  // formTask: FormGroup = this.fb.group({
  //   date: [new Date(), [zodValidator(taskSchema.pick({ date: true }))]],
  //   description: ['', [zodValidator(taskSchema.pick({ description: true }))]],
  //   status: ['todo', [zodValidator(taskSchema.pick({ status: true }))]],
  //   title: ['', [zodValidator(taskSchema.pick({ title: true }))]],
  // });
  formTask: FormGroup = this.fb.group({
    date: [new Date(), [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    status: ['todo', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(5)]],
    tags: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get tags() {
    return this.formTask.get('tags') as FormArray;
  }

  addTag(value = '') {
    this.tags.push(this.fb.control(value, Validators.required));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  submitTask() {
    if (this.formTask.status === 'INVALID') {
      return;
    }

    this.addTask.emit({ ...this.formTask.value, id: generateRandomId() });
    this.formTask.reset();
  }
}
