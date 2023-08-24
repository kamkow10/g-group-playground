import {Component} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";

@Component({
  selector: 'app-virtual-scroll-page',
  templateUrl: './virtual-scroll-page.component.html',
  styleUrls: ['./virtual-scroll-page.component.scss']
})
export class VirtualScrollPageComponent {
  elems: string[] = [];
  showWithoutVirtualScroll = false;
  showWithVirtualScroll = false;
  count = 1000;

  constructor(private restService: RestService) {
  }

  renderWithoutVirtualScroll(): void {
    this.showWithoutVirtualScroll = false;
    this.restService.getLargeList(this.count).subscribe({
      next: elems => this.elems = elems,
      complete: () => this.showWithoutVirtualScroll = true
    });
  }

  renderWithVirtualScroll(): void {
    this.showWithVirtualScroll = false;
    this.restService.getLargeList(this.count).subscribe({
      next: elems => this.elems = elems,
      complete: () => this.showWithVirtualScroll = true
    });
  }
}
