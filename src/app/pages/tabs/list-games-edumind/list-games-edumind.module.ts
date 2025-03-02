import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGamesEdumindPageRoutingModule } from './list-games-edumind-routing.module';

import { ListGamesEdumindPage } from './list-games-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGamesEdumindPageRoutingModule
  ],
})
export class ListGamesEdumindPageModule {}
