import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativosComponent implements OnInit {

  ruta = 'http://localhost:8000/';
  admin =[ ];
  
  AdministrativoSeleccionado = {
    id:'',
    Foto:'',
    Ap_Paterno:'',
    Ap_Materno:'',
    Nombre:'',
    Sexo:'',
    FechNac:'',
    CI:'',
    Password:'',
    Tipo:'',
    curso_id:'',
    Estado:''
  };
  

  newAdministrativo = new FormGroup({
    Foto:new FormControl(''),
    Ap_Paterno:new FormControl(''),
    Ap_Materno:new FormControl(''),
    Nombre:new FormControl(''),
    Sexo:new FormControl(''),
    FechNac:new FormControl(''),
    CI:new FormControl(''),
    Password:new FormControl(''),
    Tipo:new FormControl(''),
    curso_id:new FormControl(''),
    Estado:new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
    let rootVar = window['rutacion'];
    this.ruta = rootVar;
    console.log(this.ruta);
    this.CargarAdministrativo();
  }
  CargarAdministrativo() {
    axios.get(this.ruta+'api/Administrativo')
    .then(res => {
      console.log(res.data);
      this.admin = res.data;
      res.data.forEach(element => {
        element.Editando=false;
      });
    }).catch(err =>  {
    console.log("err");
    });
  }
}
