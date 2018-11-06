import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
// import { TodosResolverService } from './services/todosResolver.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const todosRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'todos',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TodoListComponent, pathMatch: 'full', data: { reuse: true } },
      { path: ':filter', component: TodoListComponent, data: { reuse: true } }
    ]
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
    AuthGuard
  ]
})
export class TodosRoutingModule {}
