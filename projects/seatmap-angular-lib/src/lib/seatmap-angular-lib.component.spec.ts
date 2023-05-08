import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatmapAngularLibComponent } from './seatmap-angular-lib.component';

describe('SeatmapAngularLibComponent', () => {
  let component: SeatmapAngularLibComponent;
  let fixture: ComponentFixture<SeatmapAngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatmapAngularLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatmapAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
