import {Component} from '@angular/core';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.scss']
})
export class AccordionPageComponent {
  items = ['Is this a question?', 'Are you sure?', 'How are you?', 'What time is it?'];
}
