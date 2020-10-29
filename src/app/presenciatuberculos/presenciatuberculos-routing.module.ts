import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciatuberculosPage } from './presenciatuberculos.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciatuberculosPage,
    children: [
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },{
    path: '',
    redirectTo: '/presenciatuberculos/page1',
    pathMatch: 'full'
  }
]
},
{
path: '',
redirectTo: '/presenciatuberculos/page1',
pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciatuberculosPageRoutingModule {}
