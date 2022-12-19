import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vendedor-save',
    loadChildren: () => import('./vendedor-save/vendedor-save.module').then( m => m.VendedorSavePageModule)
  },
  {
    path: 'prenda-save',
    loadChildren: () => import('./prenda-save/prenda-save.module').then( m => m.PrendaSavePageModule)
  },
  {
    path: 'proveedor-save',
    loadChildren: () => import('./proveedor-save/proveedor-save.module').then( m => m.ProveedorSavePageModule)
  },
  {
    path: 'prenda',
    loadChildren: () => import('./prenda/prenda.module').then( m => m.PrendaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
