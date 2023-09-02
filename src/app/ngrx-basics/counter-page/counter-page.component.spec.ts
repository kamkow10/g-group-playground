import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterPageComponent} from './counter-page.component';
import {CounterComponent} from "./counter/counter.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/counter.reducer";

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterPageComponent,
        CounterComponent
      ],
      imports: [
        StoreModule.forRoot({count: counterReducer})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
