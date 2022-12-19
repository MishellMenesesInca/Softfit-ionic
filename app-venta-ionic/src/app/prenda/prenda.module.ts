import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrendaPageRoutingModule } from './prenda-routing.module';

import { PrendaPage } from './prenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrendaPageRoutingModule
  ],
  declarations: [PrendaPage]
})
export class PrendaPageModule {}
