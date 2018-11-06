// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Todo } from '../models/todo';
// import { Observable, of, EMPTY } from 'rxjs';
// import { TodosService } from './todos.service';
// import { take, mergeMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodosResolverService implements Resolve<Todo> {
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ) {
//     console.log('TodoResolve route', route);
//     console.log('TodoResolve state', state);
//     return this.todosService.getTodo(route.params.id).pipe(
//       take(1),
//       mergeMap(todo => {
//         if (todo) {
//           return of(todo);
//         } else {
//           this.router.navigate(['/404']);
//           return EMPTY;
//         }
//       })
//     );
//   }
//   constructor(
//     private todosService: TodosService,
//     private router: Router
//     ) { }

// }
