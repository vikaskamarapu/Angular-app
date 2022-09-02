import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FosterateRoutingModule } from './fosterate-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    FosterateRoutingModule.routingComponents,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FosterateRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
  ]
})
export class FosterateModule { }
