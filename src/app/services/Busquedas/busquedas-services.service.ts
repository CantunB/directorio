import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedasServicesService {
  // private baseUrl = 'http://127.0.0.1:8000/api/v1/search';
  // private baseUrl = 'https://directorio-digital.000webhostapp.com/api/v1/search';
  // private baseUrl = 'https://directoriodigital.000webhostapp.com/api/v1/search';
  private baseUrl = 'https://fierce-lake-89684.herokuapp.com/api/v1/search';
  constructor(
    private http: HttpClient,
  ) { }

  searchEmpresas(name :string){
    const response = new Promise(resolve => {
      this.http.get(this.baseUrl+ `?search=${name}`).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    return response;
  }

}
