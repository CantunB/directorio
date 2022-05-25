import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient ) { }

  registro(data:any){
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`, data );
  }
}
