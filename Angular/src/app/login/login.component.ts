import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ruta = 'http://localhost:8000/';
  admin = [];
  Auth;
  admin1;
  Administrador = new FormGroup({
    Foto: new FormControl(''),
    Ap_Paterno: new FormControl(''),
    Ap_Materno: new FormControl(''),
    Nombre: new FormControl(''),
    Sexo: new FormControl(''),
    FechNac: new FormControl(''),
    CI: new FormControl(''),
    Password: new FormControl(''),
    Tipo: new FormControl(''),
    curso_id: new FormControl(''),
    Estado: new FormControl('')
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    let rootVar = window['rutacion'];
    this.ruta = rootVar;
  }
  Registrarse() {
    document.querySelector("#sign-up-btn");
    document.getElementById('sign-up-btn').classList.add("sign-up-mode");
  }
  
  
  autenticar() {
    if (this.Administrador.value.CI =='ADMIN' && this.Administrador.value.Password=='12345') {
      this.router.navigate(['/']);
    } else {
      console.log('ERROR AL LOGEARSE');
      this.Auth = true;
    }
    
  }
}
