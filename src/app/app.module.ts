import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AcademiaGuard } from './core/guard/academia.guard';

import { TemplateFitModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormGroup } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TemplateFitModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [AuthService, AuthGuard, AcademiaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
