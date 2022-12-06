import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorSavePage } from './proveedor-save.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorSavePageRoutingModule {}
