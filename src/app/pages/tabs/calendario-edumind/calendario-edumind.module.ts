import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioEdumindPageRoutingModule } from './calendario-edumind-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioEdumindPageRoutingModule,
    NgCalendarModule
  ],
})
export class CalendarioEdumindPageModule {}
