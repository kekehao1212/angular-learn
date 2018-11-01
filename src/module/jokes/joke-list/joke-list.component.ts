import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { Joke } from '../types';
import { JokeService } from '../services/joke.service';
import { take, mergeMap, skip, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  update$ = new Subject<void>();
  showNotification$: Observable<boolean>;
  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit() {
    const intialJokes$ = this.getDataOnce();
    const updates$ = this.update$.pipe(
      mergeMap(() => this.getDataOnce())
    );
    this.jokes$ = merge(intialJokes$, updates$);

    const intinalNotifications$ = this.jokeService.jokes.pipe(skip(1));
    const show$ = intinalNotifications$.pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);
  }

  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }
  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }
}
