import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo>;
  content = new FormControl('');
  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.todosService.getTodo(+params.get('id')))
    );
  }

  save(todo: Todo) {
    console.log(todo);
    this.todosService.updateTodo(todo)
      .subscribe((x) => console.log(x));
  }

}
