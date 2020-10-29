import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Respuesta4plantaPage } from './respuesta4planta.page';

const routes: Routes = [
  {
    path: '',
    component: Respuesta4plantaPage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('./page1/page1.module').then(m => m.Page1PageModule)
      },{
        path: '',
        redirectTo: '/respuesta4planta/page1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/respuesta4planta/page1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Respuesta4plantaPageRoutingModule { }
