import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(x => this.todos = x);
  }

}
