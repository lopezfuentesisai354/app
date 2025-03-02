import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEdumindPage } from './home-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEdumindPageRoutingModule {}
