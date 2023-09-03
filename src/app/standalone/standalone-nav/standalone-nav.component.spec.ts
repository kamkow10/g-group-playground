import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StandaloneNavComponent} from './standalone-nav.component';

describe('StandaloneNavComponent', () => {
  let component: StandaloneNavComponent;
  let fixture: ComponentFixture<StandaloneNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandaloneNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
