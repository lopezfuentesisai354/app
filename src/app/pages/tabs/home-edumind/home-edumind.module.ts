import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeEdumindPageRoutingModule } from './home-edumind-routing.module';
import { HomeEdumindPage } from './home-edumind.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEdumindPageRoutingModule,
    HomeEdumindPage
  ],

})
export class HomeEdumindPageModule {}
