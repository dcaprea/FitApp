import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AcademiaGuard } from './core/guard/academia.guard';
import { AuthGuard } from './core/guard/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/academia/home/home.component';

const routes: Routes = [
  { 
    path: 'academia', 
    component: HomeComponent,
    //loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard],
    //canActivateChild: [ AcademiaGuard]
  },
  { 
    path: '', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    //component: PagesComponent,
    canActivate: [AuthGuard],
    //canActivateChild: [AcademiaGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
