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

@NgModule({
  imports: [CommonModule, DirectivesModule, FormsModule],
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TasksTableComponent,
    TasksFilterComponent,
    TasksKambamComponent,
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TasksTableComponent,
    TasksKambamComponent,
  ],
})
export class ComponentsModule {}
