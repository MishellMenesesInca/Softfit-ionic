import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Proveedor } from "./proveedor.entity";

@Entity({ name: "PRENDA" })
export class Prenda {
  @PrimaryColumn({ name: "IDPRE", nullable: false })
  id: string;

  @Column({ name: "TIPPRE", nullable: true })
  tipo: string;

  @Column({ name: "NOMPRE", nullable: true })
  nombre: string;

  @Column({ name: "PREPRE", nullable: true })
  precio: string;

  @Column({ name: "TALPRE", nullable: true })
  talla: string;

  @Column({ name: "COLPRE", nullable: true })
  color: string;

  @Column({ name: "MARPRE", nullable: true })
  marca: string;

  @Column({ name: "DESPRE", nullable: true })
  descripcion: string;

  @Column({ name: "ESTPRE", nullable: true })
  estado: string;

  @Column({ name: "STOCKPRE", nullable: true })
  stock: string;

  @OneToOne(() => Proveedor)
  @JoinColumn({ name: "IDPROV" })
  proveedor: Proveedor;
}
