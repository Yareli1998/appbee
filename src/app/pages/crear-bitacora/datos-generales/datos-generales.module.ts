import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosGeneralesPageRoutingModule } from './datos-generales-routing.module';

import { DatosGeneralesPage } from './datos-generales.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosGeneralesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatosGeneralesPage]
})
export class DatosGeneralesPageModule {}
