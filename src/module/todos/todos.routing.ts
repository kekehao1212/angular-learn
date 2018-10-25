import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { TodosResolverService } from './services/todosResolver.service';

const todosRoutes: Routes = [
  {
    path: 'todos', component: TodoListComponent,
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    // resolve: {
    //   'todo': TodosResolverService
    // }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class TodosRoutingModule {}
