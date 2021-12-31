import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class TemplateFitModule { }
