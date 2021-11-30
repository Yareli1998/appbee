import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosGastosPageRoutingModule } from './otros-gastos-routing.module';

import { OtrosGastosPage } from './otros-gastos.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosGastosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OtrosGastosPage]
})
export class OtrosGastosPageModule {}
