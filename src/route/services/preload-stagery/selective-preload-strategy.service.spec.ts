/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreloadStrategy } from './preload-stagery.service';

describe('Service: PreloadStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadStrategy]
    });
  });

  it('should ...', inject([PreloadStrategy], (service: PreloadStrategy) => {
    expect(service).toBeTruthy();
  }));
});
