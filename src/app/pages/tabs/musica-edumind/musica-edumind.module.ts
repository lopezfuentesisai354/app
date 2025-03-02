import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicaEdumindPageRoutingModule } from './musica-edumind-routing.module';

import { MusicaEdumindPage } from './musica-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicaEdumindPageRoutingModule
  ],
})
export class MusicaEdumindPageModule {}
