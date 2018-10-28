import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../../../core/services/message/message.service';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo';
import { find, filter, groupBy } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type.': 'application/json'})
};

@Injectable()
export class TodosService {
  private todosUrl = 'api/todos';
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
  getTodo(id): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  updateTodo(todo: Todo): Observable<any> {
    console.log(todo);
    return this.http.put(this.todosUrl, todo, httpOptions);
  }

}
