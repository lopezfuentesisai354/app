import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa el componente de forma dinámica, sin necesidad de agregarlo en `declarations`
const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.page').then((m) => m.HomePage), // Carga el componente de manera dinámica
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
