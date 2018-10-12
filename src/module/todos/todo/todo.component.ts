import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo';
import { switchMap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo>;
  todo: Todo;
  templateDrivenName: string;
  todoForms = new FormGroup({
    content: new FormControl('', Validators.required),
    priority: new FormControl('', this.forbiddenNameValidator(/bob/i))
  });

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute
    ) {
    }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.todosService.getTodo(+params.get('id')))
    );
    this.todo$.subscribe(x => {
      this.todo = x;
      this.todoForms.patchValue({
        content: x.content,
        priority: x.priority
      });
      console.log(this.todoForms);
    });
  }
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
  save(todo: Todo) {
    this.todosService.updateTodo(todo)
      .subscribe((x) => console.log(x));
  }

}
