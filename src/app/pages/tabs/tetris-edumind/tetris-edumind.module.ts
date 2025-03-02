import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TetrisEdumindPageRoutingModule } from './tetris-edumind-routing.module';

import { TetrisEdumindPage } from './tetris-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TetrisEdumindPageRoutingModule
  ],
})
export class TetrisEdumindPageModule {}
