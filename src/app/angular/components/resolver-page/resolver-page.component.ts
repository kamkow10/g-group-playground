import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resolver-page',
  templateUrl: './resolver-page.component.html',
  styleUrls: ['./resolver-page.component.scss']
})
export class ResolverPageComponent {
  readonly countries: string[];
  readonly names: string[];

  constructor(private route: ActivatedRoute) {
    this.countries = route.snapshot.data['countries'];
    this.names = route.snapshot.data['names'];
  }
}
