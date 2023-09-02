import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionData} from "../interfaces/session-data";
import {Tasks} from "../interfaces/tasks";
import {CoreModule} from "../core.module";

@Injectable({
  providedIn: CoreModule
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

  getLargeObjectList(count: number): Observable<{id: number, value: number}[]> {
    return this.http.get<{id: number, value: number}[]>(`http://localhost:3000/largeObjectList?count=${count}`);
  }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/countries`);
  }

  getNames(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/names`);
  }
}
