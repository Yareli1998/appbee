import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludColmenaPageRoutingModule } from './salud-colmena-routing.module';

import { SaludColmenaPage } from './salud-colmena.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludColmenaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SaludColmenaPage]
})
export class SaludColmenaPageModule {}
