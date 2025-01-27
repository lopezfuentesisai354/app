import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',  // Redirige a la página de login por defecto
    pathMatch: 'full'       // Asegura que se redirija sólo cuando no haya otro segmento de ruta
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'estadistica',
    loadChildren: () => import('./estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'niveles',
    loadChildren: () => import('./niveles/niveles.module').then( m => m.NivelesPageModule)
  },
  {
    path: 'vinculacion',
    loadChildren: () => import('./vinculacion/vinculacion.module').then( m => m.VinculacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
