import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';


@Injectable()
export class TodosService {
  private todosUrl = 'api/todos';
  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.http.get<Todo[]>(`${environment.apiEndpoint}/api/todos`);
  }

  createTodo(todo: string) {
    return this.http.post<Todo>(`${environment.apiEndpoint}/api/todos`, { title: todo, completed: false});
  }

  updateTodo(todo: Todo) {
    return this.http.put(`${environment.apiEndpoint}/api/todos/${todo.id}`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete<Todo>(`${environment.apiEndpoint}/api/todos${id}`);
  }

  toggleAll(value: boolean) {
    return this.http.put<Todo[]>(`${environment.apiEndpoint}/api/toggleAll?completed=${value}`, null);
  }

  clearCompleted() {
    return this.http.put<Todo[]>(`${environment.apiEndpoint}/api/clearCompleted`, null);
  }
}






