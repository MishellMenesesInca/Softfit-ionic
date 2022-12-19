import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ubigeo } from "../entities/ubigeo.entity";
import { Repository } from "typeorm";
import {Proveedor} from "../entities/proveedor.entity";

@Injectable()
export class ProveedorService {

  constructor(@InjectRepository(Proveedor) private proveedorRepository: Repository<Proveedor>) {
  }

  register(proveedor: Proveedor) {
    return this.proveedorRepository.save(proveedor);
  }

  update(proveedor: Proveedor) {
    return this.proveedorRepository.save(proveedor)
  }

  findAll() {
    return this.proveedorRepository.find();
  }

  delete(id: string) {
    return this.proveedorRepository.delete(id);
  }

  findById(id: string) {
    return this.proveedorRepository.findBy({id})
  }

}
