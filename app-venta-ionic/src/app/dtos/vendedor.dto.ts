export class VendedorDto {
  id: string = '';
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  celular: string = '';
  direccion: string = '';
  email: string = '';
  estado: string = '';
  user: string = '';
  password: string = '';
  ubigeo: Ubigeo | undefined;
  tipo: string = '';
}

export class Ubigeo {
  id: string = '';
  departamento?: string = '';
  provincia?: string = '';
  distrito?: string = '';

}
