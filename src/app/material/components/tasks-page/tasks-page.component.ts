import {Component} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";
import {Tasks} from "../../../core/interfaces/tasks";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  tasks!: Tasks;

  constructor(private restService: RestService,
              private snackBar: MatSnackBar) {
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

  onCopy(): void {
    this.snackBar.open('Copied to clipboard!', 'OK', {duration: 5000});
  }
}
