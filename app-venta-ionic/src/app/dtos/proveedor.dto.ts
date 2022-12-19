export class ProveedorDto {
  id: string = '';
  razonsocial: string = '';
  ruc: string = '';
  email: string = '';
  direccion: string = '';
  tipo: string = '';
  estado: string = '';
  celular: string = '';
  ubigeo: Ubigeo | undefined;
}

export class Ubigeo {
  id: string = '';
  departamento?: string = '';
  provincia?: string = '';
  distrito?: string = '';

}
