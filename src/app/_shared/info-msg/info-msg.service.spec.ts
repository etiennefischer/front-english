import { TestBed } from '@angular/core/testing';

import { InfoMsgService } from './info-msg.service';

describe('InfoMsgService', () => {
  let service: InfoMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
