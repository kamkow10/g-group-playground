import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StandaloneNavComponent} from "../standalone-nav/standalone-nav.component";

@Component({
  selector: 'app-humans',
  standalone: true,
  imports: [CommonModule, StandaloneNavComponent],
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.scss']
})
export class HumansComponent {

}
