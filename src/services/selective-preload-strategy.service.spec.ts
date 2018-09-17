/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectivePreloadStrategy } from './selective-preload-stagery.service';

describe('Service: SelectivePreloadStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadStrategy]
    });
  });

  it('should ...', inject([SelectivePreloadStrategy], (service: SelectivePreloadStrategy) => {
    expect(service).toBeTruthy();
  }));
});
