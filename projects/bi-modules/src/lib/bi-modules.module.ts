import { NgModule } from '@angular/core';
import {BIGridComponent} from "./components/Prime/bi-prime-grid/bi-prime-grid.component";
import {BiNavComponent} from "./components/BI-Nav/bi-nav.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {NgForOf} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "@progress/kendo-angular-buttons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    BIGridComponent,
    BiNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    NgForOf,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    BIGridComponent,
    BiNavComponent
  ]
})
export class BIModulesModule { }
