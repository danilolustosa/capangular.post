import { Component } from '@angular/core';
import { Cliente } from './models/cliente.model';
import { Response } from './models/response.model';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';
  cliente:Cliente = {};
  showMessage:boolean = false;
  message:string = "";

  constructor(private service:ClienteService) { }

  onSubmit(){
    this.service.postCliente(this.cliente)
      .subscribe((response:any) => {
        let result:Response = response;

        if (result.statusCode == 201){
          this.showMessage = true;
          this.message = result.message;
        }

      });
  }
}
