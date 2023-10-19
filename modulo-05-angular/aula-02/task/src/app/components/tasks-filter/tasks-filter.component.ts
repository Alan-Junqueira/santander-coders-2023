import { Component, Input } from '@angular/core';
import { TStatus, Task } from 'src/app/models/task.model';

type TFilter = TStatus | 'all';

@Component({
  selector: 'app-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
})
export class TasksFilterComponent {
  @Input() tasks: Task[] = [];
  public status: TFilter = 'all';

  public filteredList: Task[] = [];

  filterTasks() {
    this.filteredList = this.tasks.filter((task) => {
      if (this.status === 'all') return true;
      return task.status === this.status;
    });
  }
}
