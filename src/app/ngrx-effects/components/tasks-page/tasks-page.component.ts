import {Component} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Tasks} from "../../interfaces/tasks";

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

}
