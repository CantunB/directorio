import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { EmpresaService } from 'src/app/servicio/empresa.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearEmpresasComponent implements OnInit {
    formularioEmpresa:FormGroup;

  constructor(
    public formulario:FormBuilder,
    // private empresaServices:EmpresaService
    ) {
    this.formularioEmpresa = this.formulario.group({
      nombre: [''],
      tipo: [''],
      direccion: [''],
      colonia: [''],
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log('Enviando formulario...');
    // console.log(this.formularioEmpresa.value);
    // this.empresaServices.RegistrarEmpresas(this.formularioEmpresa.value).subscribe();
  }

}
