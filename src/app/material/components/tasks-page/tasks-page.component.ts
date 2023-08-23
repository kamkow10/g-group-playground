import {Component} from '@angular/core';
import {RestService} from "../../../ngrx-effects/services/rest.service";
import {Tasks} from "../../../ngrx-effects/interfaces/tasks";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  tasks!: Tasks;

  constructor(private restService: RestService) {
    this.restService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.restService.setTasks(this.tasks).subscribe();
  }
}
