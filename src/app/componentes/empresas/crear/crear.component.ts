
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TokenService } from './../../../services/token.service';
import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { EmpresaService } from 'src/app/servicio/empresa.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearEmpresasComponent implements OnInit {

  formularioEmpresa: FormGroup;
    // public formularioEmpresa = {
    //   company_name: null,
    //   category: null,
    //   direccion: null,
    //   colonia: null,
    // };
    public error: any = [] ;

  constructor(
    private Token: TokenService,
    private Service: ServicesService,
    private router : Router,
    private Auth: AuthService,
    public formulario:FormBuilder,
    ) {
    this.formularioEmpresa = this.formulario.group({
      company_name: [''],
      tipo: [''],
      direccion: [''],
      colonia: [''],
    });

  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log('Enviando formulario...');
    this.Service.createEmpresas(this.formularioEmpresa.value).subscribe();
    // console.log(this.formularioEmpresa.value);
    // this.empresaServices.RegistrarEmpresas(this.formularioEmpresa.value).subscribe();
  }

  // onSubmit(){
  //   this.Service.createEmpresas(this.formularioEmpresa).subscribe(
  //     data => this.handleResponse(data),
  //     error => this.handleError(error)
  //   );
  // }

  handleError(error: any){
    this.error = error.error;
  }
}
