import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionData} from "../interfaces/session-data";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<SessionData> {
    return this.http.post<SessionData>('http://localhost:3000/login', {username, password})
  }

  public getTasks(): Observable<any> {
    return this.http.post<any>('http://localhost:3000/getTasks', {});
  }
}
