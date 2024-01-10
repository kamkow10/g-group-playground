import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialRoutingModule} from './material-routing.module';
import {AccordionPageComponent} from "./components/accordion-page/accordion-page.component";
import {TasksPageComponent} from "./components/tasks-page/tasks-page.component";
import {VirtualScrollPageComponent} from "./components/virtual-scroll-page/virtual-scroll-page.component";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf} from "@angular/cdk/scrolling";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AccordionPageComponent,
    TasksPageComponent,
    VirtualScrollPageComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    CdkAccordionModule,
    CdkDropList,
    ClipboardModule,
    MatInputModule,
    FormsModule,
    CdkFixedSizeVirtualScroll,
    MatButtonModule,
    CdkDrag,
    CdkDrag,
    CdkVirtualForOf,
    SharedModule
  ]
})
export class MaterialModule { }
