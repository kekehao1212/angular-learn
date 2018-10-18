/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosResolverService } from './todosResolver.service';

describe('Service: TodosResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosResolverService]
    });
  });

  it('should ...', inject([TodosResolverService], (service: TodosResolverService) => {
    expect(service).toBeTruthy();
  }));
});
