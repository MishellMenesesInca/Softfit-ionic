import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrendaSavePage } from './prenda-save.page';

const routes: Routes = [
  {
    path: '',
    component: PrendaSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrendaSavePageRoutingModule {}
