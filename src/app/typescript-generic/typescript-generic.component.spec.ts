import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TypescriptGenericComponent} from './typescript-generic.component';

describe('TypescriptGenericComponent', () => {
  let component: TypescriptGenericComponent;
  let fixture: ComponentFixture<TypescriptGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TypescriptGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
