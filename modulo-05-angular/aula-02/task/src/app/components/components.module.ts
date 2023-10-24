import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { DirectivesModule } from '../directives/directives.module';
import { FormsModule } from '@angular/forms';
import { TasksFilterComponent } from './tasks-filter/tasks-filter.component';
import { TasksKambamComponent } from './tasks-kambam/tasks-kambam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksFormReactiveComponent } from './tasks-form-reactive/tasks-form-reactive.component';

@NgModule({
  imports: [CommonModule, DirectivesModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TasksTableComponent,
    TasksFilterComponent,
    TasksKambamComponent,
    TasksFormReactiveComponent,
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TasksTableComponent,
    TasksKambamComponent,
    TasksFormReactiveComponent
  ],
})
export class ComponentsModule {}
