import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // private baseUrl = 'http://127.0.0.1:8000/api/v1';
  // private baseUrl = 'https://directorio-digital.000webhostapp.com/api/v1';
  // private baseUrl = 'https://directoriodigital.000webhostapp.com/api/v1';
  private baseUrl = 'https://fierce-lake-89684.herokuapp.com/api/v1';
  constructor(
    private http: HttpClient,
    private Token : TokenService,
    ) { }

  registro(data:any){
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`, data );
  }

  getUser(): Observable<any> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Token.get()}`
    })
    return this.http.post(`${this.baseUrl}/user`, {headers: headers});
  }
}
