import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EndOfSessionMessageComponent} from './end-of-session-message.component';

describe('EndOfSessionMessageComponent', () => {
  let component: EndOfSessionMessageComponent;
  let fixture: ComponentFixture<EndOfSessionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfSessionMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfSessionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
