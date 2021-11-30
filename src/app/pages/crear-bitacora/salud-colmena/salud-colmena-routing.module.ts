import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludColmenaPage } from './salud-colmena.page';

const routes: Routes = [
  {
    path: '',
    component: SaludColmenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludColmenaPageRoutingModule {}
