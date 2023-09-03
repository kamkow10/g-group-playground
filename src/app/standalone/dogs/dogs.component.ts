import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalListComponent} from "../animal-list/animal-list.component";
import {StandaloneNavComponent} from "../standalone-nav/standalone-nav.component";

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, AnimalListComponent, StandaloneNavComponent],
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  dogs = ['Barry', 'Rex', 'Mr Sweet']
}
