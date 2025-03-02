import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TetrisEdumindPage } from './tetris-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: TetrisEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TetrisEdumindPageRoutingModule {}
