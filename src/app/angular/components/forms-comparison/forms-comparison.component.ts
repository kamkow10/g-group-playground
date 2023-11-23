import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms-comparison',
  templateUrl: './forms-comparison.component.html',
  styleUrls: ['./forms-comparison.component.scss']
})
export class FormsComparisonComponent {
  classicForm: FormGroup;
  formBuilderForm: FormGroup;
  result = '';

  constructor(private readonly fb: FormBuilder) {
    this.classicForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl('')
      })
    });

    this.formBuilderForm = this.fb.group({
      hp: [ 0 ],
      mana: [ 0 ],
      level: [ 1 ],
      profession: ['knight'],
      dragon: this.fb.group({
        hp: [ 1000 ],
        color: [ '', Validators.required ]
      }),
      equipment: this.fb.array([])
    })
  }

  get equipment(): FormArray {
    return this.formBuilderForm.get('equipment') as FormArray;
  }

  addItem(): void {
    this.equipment.push(this.fb.control(''));
  }

  updateName(): void {
    this.classicForm.get('name')!.setValue('Tommy');
  }

  classicSubmit(): void {
    this.result = this.classicForm.value;
  }

  formBuilderSubmit(): void {
    this.result = this.formBuilderForm.value;
  }
}
