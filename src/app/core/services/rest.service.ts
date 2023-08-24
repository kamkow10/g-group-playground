import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionData} from "../interfaces/session-data";
import {Tasks} from "../interfaces/tasks";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<SessionData> {
    return this.http.post<SessionData>('http://localhost:3000/login', {username, password})
  }

  getTasks(): Observable<Tasks> {
    return this.http.get<Tasks>('http://localhost:3000/tasks');
  }

  setTasks(tasks: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>('http://localhost:3000/tasks', {tasks});
  }

  getLargeList(count: number): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/largeList?count=${count}`);
  }
}
