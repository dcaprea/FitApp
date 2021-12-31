import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*FORMS*/
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

/*MATERIAL*/
import { MatDialogModule } from '@angular/material/dialog';

/*ROTAS*/
import { PagesRoutingModule } from './pages-routing.module';
import { AcademiaGuard } from '../core/guard/academia.guard';

/*COMPONENTES*/
import { PagesComponent } from './pages.component';
import { HomeComponent } from './academia/home/home.component';

/*PIPES*/
import { LocalDateTimePipe } from '../core/pipes/local-date-time.pipe';
import { OrderbyPipe } from '../core/pipes/orderby.pipe';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LocalDateTimePipe,
    OrderbyPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AcademiaGuard, LocalDateTimePipe]
})
export class PagesModule { }
