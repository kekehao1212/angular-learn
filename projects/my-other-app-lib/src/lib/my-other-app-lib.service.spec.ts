import { TestBed, inject } from '@angular/core/testing';

import { MyOtherAppLibService } from './my-other-app-lib.service';

describe('MyOtherAppLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyOtherAppLibService]
    });
  });

  it('should be created', inject([MyOtherAppLibService], (service: MyOtherAppLibService) => {
    expect(service).toBeTruthy();
  }));
});
