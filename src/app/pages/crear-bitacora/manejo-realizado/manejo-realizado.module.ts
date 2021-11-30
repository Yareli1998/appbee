import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoRealizadoPageRoutingModule } from './manejo-realizado-routing.module';

import { ManejoRealizadoPage } from './manejo-realizado.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoRealizadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManejoRealizadoPage]
})
export class ManejoRealizadoPageModule {}
