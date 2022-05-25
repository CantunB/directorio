import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public register = {
    name: null,
    username: null,
    email: null,
    phone: null,
    address: null,
    suburb: null,
    password: null,
    password_confirmation: null,
    company_name: null,
    category: null
  };
  public error: any = [] ;
  constructor( private Service:ServicesService ) { }


  ngOnInit(): void {
  }

  onRegister(){
    // console.log(this.form);
    this.Service.registro(this.register).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error: any){
    this.error = error.error.errors;
  }
}
