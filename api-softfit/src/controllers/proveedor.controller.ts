import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UbigeoService } from "../services/ubigeo.service";
import { Ubigeo } from "../entities/ubigeo.entity";
import {ProveedorService} from "../services/proveedor.service";
import {Proveedor} from "../entities/proveedor.entity";

@Controller("proveedores")
export class ProveedorController {

  constructor(private proveedorService: ProveedorService) {
  }

  @Post()
  async register(@Body() proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorService.register(proveedor);
  }

  @Put()
  async update(@Body() proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorService.update(proveedor);
  }

  @Get()
  async findAll(): Promise<Proveedor[]> {
    return this.proveedorService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Proveedor[]> {
    return this.proveedorService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.proveedorService.delete(id);
  }

}
