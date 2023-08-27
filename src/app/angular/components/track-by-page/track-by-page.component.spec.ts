import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrackByPageComponent} from './track-by-page.component';

describe('TrackByPageComponent', () => {
  let component: TrackByPageComponent;
  let fixture: ComponentFixture<TrackByPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackByPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
