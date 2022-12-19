import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VendedorDto} from "../dtos/vendedor.dto";
import {environment} from "../../environments/environment";
import {PrendaDto} from "../dtos/prenda.dto";

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<PrendaDto[]>(`${environment.apiUrl}/prendas`);
  }

  register(prenda: PrendaDto) {
    return this.http.post<PrendaDto>(`${environment.apiUrl}/prendas`, prenda);
  }

  findByName(nombre: string) {
    return this.http.get<PrendaDto[]>(`${environment.apiUrl}/prendas/nombre/${nombre}`);
  }
}
