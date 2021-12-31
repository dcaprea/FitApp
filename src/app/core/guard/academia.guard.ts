import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth.service'

@Injectable()
export class AcademiaGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    console.log("Academia uard")
    if(this.authService.usuarioEstaAutenticado()){
      return true
    }else{
      return false
    }
  }

}
