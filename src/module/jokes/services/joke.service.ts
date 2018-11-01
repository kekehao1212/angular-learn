import { Injectable } from '@angular/core';
import { JokeResponse, Joke } from '../types/index';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subject } from 'rxjs';

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable()
export class JokeService {
  private cache$: Observable<Array<Joke>>;
  private reload$ = new Subject<void>();
  constructor(
    private httpClient: HttpClient
  ) { }

  get jokes() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestJokes()),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cache$;
  }
  forceReload() {
  // Calling next will complete the current cache instance
   this.reload$.next();
   // Setting the cache to null will create a new cache the
   // next time 'jokes' is called
   this.cache$ = null;
  }
  private requestJokes() {
    return this.httpClient.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }
}

