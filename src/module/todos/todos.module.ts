import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TodosRoutingModule } from './todos.routing';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { TodoComponent } from './todo/todo.component';
import { ForbiddenNameDirective } from './todo/forbiddenName.directive';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    ForbiddenNameDirective,
    LoginComponent
  ],
  providers: [
    TodosService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }]
})
export class TodosModule { }
