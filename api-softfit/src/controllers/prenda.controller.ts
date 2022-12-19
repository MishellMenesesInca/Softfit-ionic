import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VendedorService } from "../services/vendedor.service";
import { Vendedor } from "../entities/vendedor.entity";
import {PrendaService} from "../services/prenda.service";
import {Prenda} from "../entities/prenda.entity";

@Controller("prendas")
export class PrendaController {

  constructor(private prendaService: PrendaService) {
  }

  @Post()
  async register(@Body() prenda: Prenda): Promise<Prenda> {
    return this.prendaService.register(prenda);
  }

  @Put()
  async update(@Body() prenda: Prenda): Promise<Prenda> {
    return this.prendaService.update(prenda);
  }

  @Delete("/delete/:id")
  async delete(@Param("id") id: string) {
    this.prendaService.deleteLogical(id);
  }

  @Get()
  async findAll(): Promise<Prenda[]> {
    return this.prendaService.findAll();
  }

  @Get("/query")
  async findQuery() {
    return this.prendaService.executeQuery();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Prenda[]> {
    return this.prendaService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.prendaService.delete(id);
  }

  @Get("/nombre/:name")
  findByName(@Param("name") name: string) {
    return this.prendaService.finByName(name);
  }

}
