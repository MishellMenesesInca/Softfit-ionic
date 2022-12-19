import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ubigeo, VendedorDto} from "../dtos/vendedor.dto";
import {ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {PrendaDto, Proveedor} from "../dtos/prenda.dto";
import {PrendaService} from "../services/prenda.service";
import {ProveedorService} from "../services/proveedor.service";

@Component({
  selector: 'app-prenda-save',
  templateUrl: './prenda-save.page.html',
  styleUrls: ['./prenda-save.page.scss'],
})
export class PrendaSavePage implements OnInit {

  prendaForm: FormGroup = new FormGroup<any>({});
  proveedores: Proveedor[] = [];

  constructor(private fb: FormBuilder,
              private prendaService: PrendaService,
              private proveedorService: ProveedorService,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    this.initPrendaForm();
    this.listarProveedores();
  }

  initPrendaForm() {
    this.prendaForm = this.fb.group({
      id: [null],
      tipo: [null],
      nombre: [null],
      precio: [null],
      color: [null],
      marca: [null],
      descripcion: [null],
      estado: ['A'],
      stock: [null],
      proveedor: [null]
    });
  }

  listarProveedores() {
    this.proveedorService.find().subscribe(res => {
      this.proveedores = res;
    })
  }

  registerPrenda() {
    const prenda: PrendaDto = this.prendaForm.value;
    prenda.id = '000100'
    prenda.proveedor = {
      id: this.prendaForm.controls['proveedor'].value
    }
    this.prendaService.register(prenda).subscribe(res => {
      this.prendaForm.reset();
      this.showMessage(`Resgistraste  ${res.nombre} como nueva prenda`);
      this.router.navigate(['home']);
    })
  }

  async showMessage(message: string) {
    const  toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present;
  }
}

