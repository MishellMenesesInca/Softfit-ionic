import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrendaPage } from './prenda.page';

const routes: Routes = [
  {
    path: '',
    component: PrendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrendaPageRoutingModule {}
