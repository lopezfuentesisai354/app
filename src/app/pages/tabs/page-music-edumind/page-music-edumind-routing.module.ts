import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMusicEdumindPage } from './page-music-edumind.page';

const routes: Routes = [
  {
    path: '',
    component: PageMusicEdumindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMusicEdumindPageRoutingModule {}
