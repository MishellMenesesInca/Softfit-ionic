import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorSavePageRoutingModule } from './proveedor-save-routing.module';

import { ProveedorSavePage } from './proveedor-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorSavePageRoutingModule
  ],
  declarations: [ProveedorSavePage]
})
export class ProveedorSavePageModule {}
