import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import { Ubigeo } from "./ubigeo.entity";

@Entity({ name: "PROVEEDOR" })
export class Proveedor {

  @PrimaryColumn({ name: "IDPROV", nullable: false })
  id: string;

  @Column({ name: "RAZSOCPROV", nullable: false })
  razonsocial: string;

  @Column({ name: "RUCPROV", nullable: false })
  ruc: string;

  @Column({ name: "EMAPROV", nullable: false })
  email: string;

  @Column({ name: "DIRPROV", nullable: false })
  direccion: string;

  @Column({ name: "TIPPROV", nullable: false })
  tipo: string;

  @Column({ name: "ESTPROV", nullable: false })
  estado: string;

  @Column({ name: "CELPROV", nullable: false })
  celular: string;

  @OneToOne(() => Ubigeo)
  @JoinColumn({ name: "CODUBI" })
  ubigeo: Ubigeo;
}
