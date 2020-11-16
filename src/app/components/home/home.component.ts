import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

}
