import { TestBed } from '@angular/core/testing';

import { ProviderSerService } from './provider-ser.service';

describe('ProviderSerService', () => {
  let service: ProviderSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
