import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasEdumindPage } from './estadisticas-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasEdumindPageRoutingModule {}
