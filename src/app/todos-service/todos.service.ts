import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTask } from '../interfaces/AddTask';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  todosList$: Observable<AddTask> = new Observable<AddTask>();

  getTodos(): Observable<AddTask> {
    return this.httpClient.get<AddTask>('http://localhost:4000/todos');
  }
}
