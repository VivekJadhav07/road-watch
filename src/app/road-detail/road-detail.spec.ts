import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadDetail } from './road-detail';

describe('RoadDetail', () => {
  let component: RoadDetail;
  let fixture: ComponentFixture<RoadDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
