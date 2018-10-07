import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

const todosRoutes: Routes = [{
    path: 'todos', component: TodoListComponent,
  }, {
    path: 'todos/:id', component: TodoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule {}
