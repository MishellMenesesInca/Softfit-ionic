import { Component, OnInit } from '@angular/core';
import {PrendaService} from "../services/prenda.service";

@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.page.html',
  styleUrls: ['./prenda.page.scss'],
})
export class PrendaPage implements OnInit {
prendas:any[]=[];

  constructor(private prendaService: PrendaService) { }

  ngOnInit() {

  }
findAll(){
   this.prendaService.findAll().subscribe((res:any)=>{
     this.prendas=res;

   })
}

}
