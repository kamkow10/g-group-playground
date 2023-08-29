import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResolverPageComponent} from './resolver-page.component';

describe('ResolverPageComponent', () => {
  let component: ResolverPageComponent;
  let fixture: ComponentFixture<ResolverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
