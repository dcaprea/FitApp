import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/services/auth.service'

@Component({
  selector: 'fit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mostrarOMenu: boolean = false

  formDaniel = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.mostrarMenu.subscribe(data => {
      this.mostrarOMenu = data
    })
  }


  submit(): void{
    this.auth.valida(this.formDaniel.value)
    /*console.log(this.formDaniel.value)
    this.formDaniel.value.usuario = ''
    this.formDaniel.value.senha = ''
    this.formDaniel.reset(this.formDaniel.value);*/
  }

}
