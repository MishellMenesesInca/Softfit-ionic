import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ubigeo} from "../dtos/vendedor.dto";
import {environment} from "../../environments/environment";
import {Proveedor} from "../dtos/prenda.dto";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  find() {
    return this.http.get<Proveedor[]>(`${environment.apiUrl}/proveedores`);
  }
}
