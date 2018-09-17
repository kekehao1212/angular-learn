import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable()
export class SelectivePreloadStrategy implements PreloadingStrategy {
  preloadModules: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.preloadModules.push(route.path);
      console.log('Preload' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
  constructor() { }

}
