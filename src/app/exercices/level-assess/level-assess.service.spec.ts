import { TestBed } from '@angular/core/testing';

import { LevelAssessService } from './level-assess.service';

describe('LevelAssessService', () => {
  let service: LevelAssessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelAssessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
