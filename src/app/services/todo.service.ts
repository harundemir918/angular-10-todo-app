import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Todo} from '../models/todo';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  create(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiServer + '/todos', JSON.stringify(todo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  getById(id): Observable<Todo> {
    return this.httpClient.get<Todo>(this.apiServer + '/todos/' + id)
      .pipe(catchError(this.errorHandler));
  }
  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiServer + '/todos')
      .pipe(catchError(this.errorHandler));
  }
  update(id, todo): Observable<Todo> {
    return this.httpClient.put<Todo>(this.apiServer + '/todos/' + id, JSON.stringify(todo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  delete(id) {
    return this.httpClient.delete<Todo>(this.apiServer + '/todos/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
