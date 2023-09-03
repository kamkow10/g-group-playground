import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Owner} from "./models/owner";
import {Cat} from "./models/cat";
import {Dog} from "./models/dog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-typescript-generic',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './typescript-generic.component.html',
  styleUrls: ['./typescript-generic.component.scss']
})
export class TypescriptGenericComponent {
  catsOwner = new Owner<Cat>();
  dogsOwner = new Owner<Dog>();

  addCat(): void {
    this.catsOwner.addAnimal(new Cat());
  }

  addDog(): void {
    this.dogsOwner.addAnimal(new Dog());
  }
}
