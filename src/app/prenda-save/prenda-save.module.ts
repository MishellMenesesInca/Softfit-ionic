import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrendaSavePageRoutingModule } from './prenda-save-routing.module';

import { PrendaSavePage } from './prenda-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrendaSavePageRoutingModule
  ],
  declarations: [PrendaSavePage]
})
export class PrendaSavePageModule {}
