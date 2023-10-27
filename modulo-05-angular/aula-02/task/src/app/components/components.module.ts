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
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListUpdatedComponent } from './task-list-updated/task-list-updated.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskUpdateModalComponent } from './task-update-modal/task-update-modal.component';

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
    TaskCardComponent,
    TaskListUpdatedComponent,
    TaskStatusComponent,
    TaskUpdateModalComponent,
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TasksTableComponent,
    TasksKambamComponent,
    TasksFormReactiveComponent,
    TaskListUpdatedComponent,
  ],
})
export class ComponentsModule {}
