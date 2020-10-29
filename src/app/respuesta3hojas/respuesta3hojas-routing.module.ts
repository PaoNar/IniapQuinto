import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Respuesta3hojasPage } from './respuesta3hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Respuesta3hojasPage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('./page1/page1.module').then(m => m.Page1PageModule)
      },
      {
        path: '',
        redirectTo: '/respuesta3hojas/page1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/respuesta3hojas/page1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Respuesta3hojasPageRoutingModule { }
