import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false

  mostrarMenu = new EventEmitter<boolean>();

  valida(dados: any){
    if(dados.usuario==='daniel' && dados.senha==='123'){
      this.router.navigate(['/academia'])
      this.mostrarMenu.emit(true)
      this.usuarioAutenticado = true      
    }else{
      this.router.navigate(['/login'])
      this.mostrarMenu.emit(false);
      this.usuarioAutenticado = false
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }

}
