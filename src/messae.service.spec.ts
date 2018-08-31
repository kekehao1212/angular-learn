/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessaeService } from './messae.service';

describe('Service: Messae', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessaeService]
    });
  });

  it('should ...', inject([MessaeService], (service: MessaeService) => {
    expect(service).toBeTruthy();
  }));
});
