import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './../models/cliente.model';
import { Response } from './../models/response.model';

const apiURL = "https://run.mocky.io/v3/759cdcfa-0190-44ec-b81e-df4e25538f58";

@Injectable()
export class ClienteService {

  constructor(private http:HttpClient) { }

  postCliente(cliente:Cliente): Observable<Response> {
    return this.http.post<Response>(apiURL,cliente);
  }
}
