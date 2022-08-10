import { TestBed } from '@angular/core/testing';

import { WebMService } from './web-m.service';

describe('WebMService', () => {
  let service: WebMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
