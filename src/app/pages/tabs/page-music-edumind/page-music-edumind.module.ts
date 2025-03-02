import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageMusicEdumindPageRoutingModule } from './page-music-edumind-routing.module';

import { PageMusicEdumindPage } from './page-music-edumind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageMusicEdumindPageRoutingModule
  ],
})
export class PageMusicEdumindPageModule {}
