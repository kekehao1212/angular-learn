/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpInterceptorsService } from './http-interceptors.service';

describe('Service: HttpInterceptors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorsService]
    });
  });

  it('should ...', inject([HttpInterceptorsService], (service: HttpInterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
