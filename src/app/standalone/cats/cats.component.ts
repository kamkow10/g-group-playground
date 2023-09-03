import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalListComponent} from "../animal-list/animal-list.component";
import {StandaloneNavComponent} from "../standalone-nav/standalone-nav.component";

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, AnimalListComponent, StandaloneNavComponent],
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  cats = ['Dolly', 'Pipi', 'Emma'];
}
