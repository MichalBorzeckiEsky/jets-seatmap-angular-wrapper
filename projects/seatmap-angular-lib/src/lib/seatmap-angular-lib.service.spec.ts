import { TestBed } from '@angular/core/testing';

import { SeatmapAngularLibService } from './seatmap-angular-lib.service';

describe('SeatmapAngularLibService', () => {
  let service: SeatmapAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatmapAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
