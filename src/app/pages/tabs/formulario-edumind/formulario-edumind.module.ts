import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEdumindPageRoutingModule } from './formulario-edumind-routing.module';

import { FormularioEdumindPage } from './formulario-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEdumindPageRoutingModule,
    FormularioEdumindPage
  ],
})
export class FormularioEdumindPageModule {}
