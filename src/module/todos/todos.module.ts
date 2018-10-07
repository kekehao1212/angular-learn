import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TodosRoutingModule } from './todos.routing';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TodosRoutingModule
  ],
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  providers: [TodosService]
})
export class TodosModule { }
