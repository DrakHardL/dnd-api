import { TestBed } from '@angular/core/testing';

import { DnDApi } from './dn-dapi';

describe('DnDApi', () => {
  let service: DnDApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnDApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
