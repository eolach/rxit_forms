import { TestBed, inject } from '@angular/core/testing';

import { DispenserService } from './dispenser.service';

describe('DispenserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispenserService]
    });
  });

  it('should be created', inject([DispenserService], (service: DispenserService) => {
    expect(service).toBeTruthy();
  }));
});
