import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoRealizadoPage } from './manejo-realizado.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoRealizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoRealizadoPageRoutingModule {}
