import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademiaGuard } from '../core/guard/academia.guard';

import { AuthGuard } from '../core/guard/auth.guard';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './academia/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  { 
    path: 'academia', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AcademiaGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
