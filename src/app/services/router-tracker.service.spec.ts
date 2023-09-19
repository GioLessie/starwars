import { TestBed } from '@angular/core/testing';

import { RouterTrackerService } from './router-tracker.service';

describe('RouterTrackerService', () => {
  let service: RouterTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
