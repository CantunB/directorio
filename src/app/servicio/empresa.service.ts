import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from './Empresas';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  API: string="http://127.0.0.1:8000/api/empresas"
  constructor(private clienteHttp:HttpClient) { }

  RegistrarEmpresas(datosEmpresas:Empresas):Observable<any>{
    // return this.clienteHttp.post(this.API+"?store=1"+datosEmpresas);
    // return this.clienteHttp.post(this.API+"?store=1"+datosEmpresas);
  }
}
