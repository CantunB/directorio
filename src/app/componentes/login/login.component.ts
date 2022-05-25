import { TokenService } from './../../services/token.service';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor(
    private Service: ServicesService,
    private Token: TokenService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any){
    this.Token.handle(data.access_token);
  }

  handleError(error: any){
    this.error = error.error.errors;
  }

}
