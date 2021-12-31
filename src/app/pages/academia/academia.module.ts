import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AcademiaRoutingModule } from './academia-routing.module'


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AcademiaRoutingModule
  ]
})
export class AcademiaModule { }
