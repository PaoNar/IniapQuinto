import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaRaizPage } from './respuesta-raiz.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaRaizPage,
    children: [
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: '',
    redirectTo: '/respuesta-raiz/page2',
    pathMatch: 'full'
  }
 ]
},
{
path: '',
redirectTo: '/respuesta-raiz/page2',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaRaizPageRoutingModule {}
