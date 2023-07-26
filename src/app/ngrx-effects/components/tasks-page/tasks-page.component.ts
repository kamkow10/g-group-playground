import { Component } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {map, mergeMap, Observable, take} from "rxjs";
import {selectLoginState} from "../../state/login.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  tasks!: {todo: string[], done: string[]};

  constructor(private restService: RestService,
              private store: Store) {
    this.store.select(selectLoginState).pipe(
      take(1),
      mergeMap(state => this.restService.getTasks(state.token))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
