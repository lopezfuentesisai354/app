import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioEdumindPage } from './calendario-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioEdumindPageRoutingModule {}
