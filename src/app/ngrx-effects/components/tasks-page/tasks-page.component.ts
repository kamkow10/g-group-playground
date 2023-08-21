import {Component} from '@angular/core';
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  tasks!: {todo: string[], done: string[]};

  constructor(private restService: RestService) {
    this.restService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
