import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VirtualScrollPageComponent} from './virtual-scroll-page.component';

describe('VirtualScrollPageComponent', () => {
  let component: VirtualScrollPageComponent;
  let fixture: ComponentFixture<VirtualScrollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualScrollPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
