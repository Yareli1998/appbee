import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerBitacoraPage } from './ver-bitacora.page';

const routes: Routes = [
  {
    path: '',
    component: VerBitacoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerBitacoraPageRoutingModule {}
