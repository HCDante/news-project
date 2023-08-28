import { TestBed } from '@angular/core/testing';

import { LoreminsupmService } from './loreminsupm.service';

describe('LoreminsupmService', () => {
  let service: LoreminsupmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoreminsupmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
