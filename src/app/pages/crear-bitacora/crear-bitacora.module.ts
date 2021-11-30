import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearBitacoraPageRoutingModule } from './crear-bitacora-routing.module';

import { CrearBitacoraPage } from './crear-bitacora.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearBitacoraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearBitacoraPage]
})
export class CrearBitacoraPageModule {}
