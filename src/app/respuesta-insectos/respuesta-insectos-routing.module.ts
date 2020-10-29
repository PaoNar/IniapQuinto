import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaInsectosPage } from './respuesta-insectos.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaInsectosPage,
    children: [
 
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: '',
    redirectTo: '/respuesta-insectos/page2',
    pathMatch: 'full'
  }
 ]
},
{
path: '',
redirectTo: '/respuesta-insectos/page2',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaInsectosPageRoutingModule {}
