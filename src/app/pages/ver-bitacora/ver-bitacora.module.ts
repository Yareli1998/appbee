import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerBitacoraPageRoutingModule } from './ver-bitacora-routing.module';

import { VerBitacoraPage } from './ver-bitacora.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerBitacoraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerBitacoraPage]
})
export class VerBitacoraPageModule {}
