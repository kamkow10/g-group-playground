import {Component} from '@angular/core';
import {RestService} from "../../../core/services/rest.service";

@Component({
  selector: 'app-track-by-page',
  templateUrl: './track-by-page.component.html',
  styleUrls: ['./track-by-page.component.scss']
})
export class TrackByPageComponent {
  elemsDefault: {id: number, value: number}[] = [];
  elemsTrackBy: {id: number, value: number}[] = [];
  defaultButtonDisabled = false;
  trackByButtonDisabled = false;
  count = 1000;

  constructor(private restService: RestService) {
  }

  refreshDefault(): void {
    this.defaultButtonDisabled = true;
    this.restService.getLargeObjectList(this.count).subscribe({
      next: elems => {
        this.elemsDefault = elems;
        this.defaultButtonDisabled = false;
      }
    });
  }

  refreshTrackBy(): void {
    this.trackByButtonDisabled = true;
    this.restService.getLargeObjectList(this.count).subscribe({
      next: elems => {
        this.elemsTrackBy = elems;
        this.trackByButtonDisabled = false;
      }
    });
  }

  trackBy(index: number, item: {id: number, value: number}): number {
    return item.id;
  }
}
