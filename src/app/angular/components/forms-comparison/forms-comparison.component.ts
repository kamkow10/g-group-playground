import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms-comparison',
  templateUrl: './forms-comparison.component.html',
  styleUrls: ['./forms-comparison.component.scss']
})
export class FormsComparisonComponent {
  name = new FormControl('');

  updateName(): void {
    this.name.setValue('Tommy');
  }
}
