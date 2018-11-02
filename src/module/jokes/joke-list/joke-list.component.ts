import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { Joke } from '../types';
import { JokeService } from '../services/joke.service';
import { take, mergeMap, skip, mapTo, switchMap } from 'rxjs/operators';
import { Memoize } from 'lodash-decorators';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  update$ = new Subject<void>();
  showNotification$: Observable<boolean>;
  forceReload$ = new Subject<void>();
  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit() {
    const intialJokes$ = this.getDataOnce();
    const updates$ = merge(this.forceReload$, this.update$).pipe(
      mergeMap(() => this.getDataOnce())
    );
    this.jokes$ = merge(intialJokes$, updates$);

    const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
    const intinalNotifications$ = this.getNotifications();
    const show$ = merge(reload$, intinalNotifications$).pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);
  }

  forceReload() {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  @Memoize()
  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }

  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }
  getNotifications() {
    return this.jokeService.jokes.pipe(skip(1));
  }
}
