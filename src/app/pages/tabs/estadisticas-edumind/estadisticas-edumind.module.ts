import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasEdumindPageRoutingModule } from './estadisticas-edumind-routing.module';

import { EstadisticasEdumindPage } from './estadisticas-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasEdumindPageRoutingModule,
    EstadisticasEdumindPage
  ],
})
export class EstadisticasEdumindPageModule {}
