import {Component, OnInit} from '@angular/core';
import {VendedorService} from "../services/vendedor.service";
import {VendedorDto} from "../dtos/vendedor.dto";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {debounce, debounceTime, switchMap} from "rxjs";
import {PrendaDto} from "../dtos/prenda.dto";
import {PrendaService} from "../services/prenda.service";
import {ToastController, ViewWillEnter} from "@ionic/angular";
import {MensageService} from "../services/mensage.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  ViewWillEnter{

  vendedores: VendedorDto[] = [];
  prendas: PrendaDto[] = [];
  nombreUsuario = '';
  searchControl: FormControl = new FormControl<any>('');

  constructor(private vendedorService: VendedorService,
              private prendaService: PrendaService,
              private mensageService: MensageService,
              private authService: AuthService,
              private router: Router) {
    this.nombreUsuario = this.authService.getSession().nombre;
  }


  ionViewWillEnter() {
    this.getVendedores();
    this.initSearch();
  }


  getVendedores() {
    this.vendedorService.findAll().subscribe(res => {
      this.vendedores = res;
    })
  }

  getPrendas() {
    this.prendaService.findAll().subscribe(res => {
      this.prendas = res;
    })
  }

  logout() {
    this.authService.deleteSession();
    this.router.navigate(['login']).then();
  }

  guardarVendedor(vendedor?: VendedorDto) {
    if (vendedor) {
      this.vendedorService.vendedorSelected = vendedor;
    }
    this.router.navigate(['vendedor-save']).then();
  }
  nuevoPrenda() {
    this.router.navigate(['prenda-save']).then();
  }


  eliminarVendedor(id: string) {
    this.vendedorService.delete(id).subscribe(() => {
      this.mensageService.showMessage('Se elimino al vendedor');
      this.getVendedores();
      })


  }

  initSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      switchMap(search => {
        if (search) {
          return this.vendedorService.findByName(search);
        }
        return  this.vendedorService.findAll();
      })
    ).subscribe(res => {
      this.vendedores = res;
      console.log('Respuesta:' , res);
    })

  }


}
