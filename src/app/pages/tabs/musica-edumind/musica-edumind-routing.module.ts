import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicaEdumindPage } from './musica-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: MusicaEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicaEdumindPageRoutingModule {}
