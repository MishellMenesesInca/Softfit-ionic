export class PrendaDto {
  id: string = '';
  tipo: string = '';
  nombre: string = '';
  precio: string = '';
  color: string = '';
  marca: string = '';
  descripcion: string = '';
  estado: string = '';
  stock: string = '';
  proveedor: Proveedor | undefined;

}

export class Proveedor {
  id: string = '';
  razonsocial?: string = '';
  ruc?: string = '';
  email?: string = '';
  celular?: string = '';
}


