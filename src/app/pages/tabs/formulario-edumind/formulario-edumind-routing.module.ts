import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEdumindPage } from './formulario-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEdumindPageRoutingModule {}
