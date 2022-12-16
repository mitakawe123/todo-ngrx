import { Component, OnInit, ViewChild } from '@angular/core';
import { AddTask } from './interfaces/AddTask';
import { TodosService } from './todos-service/todos.service';
import { Store } from '@ngrx/store';
import { getTasks } from 'src/store/actions/Tasks.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('task_input') task_input: any;

  constructor(private todosService: TodosService, private store: Store) {}

  ngOnInit(): void {}

  getAllTasks() {
    this.todosService
      .getTodos()
      .subscribe((todos: any) =>
        this.store.dispatch(getTasks({ get_tasks: todos }))
      );
  }
}
