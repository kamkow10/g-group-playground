import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-standalone-nav',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './standalone-nav.component.html',
  styleUrls: ['./standalone-nav.component.scss']
})
export class StandaloneNavComponent {

}
