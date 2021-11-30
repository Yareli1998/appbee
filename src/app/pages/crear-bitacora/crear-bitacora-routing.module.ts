import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearBitacoraPage } from './crear-bitacora.page';

const routes: Routes = [
  {
    path: '',
    component: CrearBitacoraPage
  },
  {
    path: 'datos-generales',
    loadChildren: () => import('./datos-generales/datos-generales.module').then( m => m.DatosGeneralesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'manejo-realizado',
    loadChildren: () => import('./manejo-realizado/manejo-realizado.module').then( m => m.ManejoRealizadoPageModule)
  },
  {
    path: 'salud-colmena',
    loadChildren: () => import('./salud-colmena/salud-colmena.module').then( m => m.SaludColmenaPageModule)
  },
  {
    path: 'observaciones',
    loadChildren: () => import('./observaciones/observaciones.module').then( m => m.ObservacionesPageModule)
  },
  {
    path: 'otros-gastos',
    loadChildren: () => import('./otros-gastos/otros-gastos.module').then( m => m.OtrosGastosPageModule)
  },
  {
    path: 'produccion',
    loadChildren: () => import('./produccion/produccion.module').then( m => m.ProduccionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearBitacoraPageRoutingModule {}
