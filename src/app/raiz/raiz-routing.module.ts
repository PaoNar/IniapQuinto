import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaizPage } from './raiz.page';

const routes: Routes = [
  {
    path: '',
    component: RaizPage,
    children: [
  {
    path: 'nematodos',
    loadChildren: () => import('./nematodos/nematodos.module').then( m => m.NematodosPageModule)
  }
 ]
},
{
path: '',
redirectTo: '/raiz/page1',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaizPageRoutingModule {}
