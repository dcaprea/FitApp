import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'fit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  usuario: boolean = false

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.mostrarMenu.subscribe( (dado) => {
      this.usuario = dado
    })
  }

}
