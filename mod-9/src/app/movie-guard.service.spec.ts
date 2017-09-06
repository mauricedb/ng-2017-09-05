import { TestBed, inject } from '@angular/core/testing';

import { MovieGuardService } from './movie-guard.service';

describe('MovieGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieGuardService]
    });
  });

  it('should be created', inject([MovieGuardService], (service: MovieGuardService) => {
    expect(service).toBeTruthy();
  }));
});
