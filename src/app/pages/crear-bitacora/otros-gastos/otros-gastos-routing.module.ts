import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosGastosPage } from './otros-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: OtrosGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosGastosPageRoutingModule {}
