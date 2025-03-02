import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home-edumind',
        pathMatch: 'full'
      },
      {
        path: 'home-edumind',
        loadChildren: () => import('./home-edumind/home-edumind.module').then( m => m.HomeEdumindPageModule)
      },
      {
        path: 'formulario-edumind',
        loadChildren: () => import('./formulario-edumind/formulario-edumind.module').then( m => m.FormularioEdumindPageModule)
      },
      {
        path: 'estadisticas-edumind',
        loadChildren: () => import('./estadisticas-edumind/estadisticas-edumind.module').then( m => m.EstadisticasEdumindPageModule)
      },
      {
        path: 'calendario-edumind',
        loadChildren: () => import('./calendario-edumind/calendario-edumind.module').then( m => m.CalendarioEdumindPageModule)
      },
    ]
  },
  {
    path: 'musica-edumind',
    loadChildren: () => import('./musica-edumind/musica-edumind.module').then( m => m.MusicaEdumindPageModule)
  },
  {
    path: 'page-music-edumind',
    loadChildren: () => import('./page-music-edumind/page-music-edumind.module').then( m => m.PageMusicEdumindPageModule)
  },
  {
    path: 'list-games-edumind',
    loadChildren: () => import('./list-games-edumind/list-games-edumind.module').then( m => m.ListGamesEdumindPageModule)
  },
  {
    path: 'tetris-edumind',
    loadChildren: () => import('./tetris-edumind/tetris-edumind.module').then( m => m.TetrisEdumindPageModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
