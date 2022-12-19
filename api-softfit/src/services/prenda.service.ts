import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Vendedor } from "../entities/vendedor.entity";
import {Prenda} from "../entities/prenda.entity";

@Injectable()
export class PrendaService {

  constructor(@InjectRepository(Prenda) private prendaRepository: Repository<Prenda>,
              @InjectDataSource() private dataSource: DataSource) {
  }

  register(prenda: Prenda) {
    return this.prendaRepository.save(prenda);
  }

  update(prenda: Prenda) {
    return this.prendaRepository.save(prenda);
  }

  findAll() {
    return this.prendaRepository.find({
      where: {
        estado: "A"
      },
      relations: {
        proveedor: true
      }
    });
  }

  delete(id: string) {
    return this.prendaRepository.delete(id);
  }

  findById(id: string) {
    return this.prendaRepository.find({
      where: {
        id
      },
      relations: {
        proveedor: true
      }
    });
  }

  deleteLogical(id: string) {
    this.findById(id).then(res => {
      const prenda = res[0];
      prenda.estado = "I";
      this.prendaRepository.save(prenda);
    });
  }

  async executeQuery() {
    return this.dataSource.query(`SELECT count(1) FROM PRENDA`);
  }

  finByName(nombre: string) {
    return this.prendaRepository.findBy({nombre});
  }

}
