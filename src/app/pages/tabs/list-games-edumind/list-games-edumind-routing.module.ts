import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGamesEdumindPage } from './list-games-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: ListGamesEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGamesEdumindPageRoutingModule {}
