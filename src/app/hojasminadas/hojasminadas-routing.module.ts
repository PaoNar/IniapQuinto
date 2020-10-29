import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasminadasPage } from './hojasminadas.page';

const routes: Routes = [
  {
    path: '',
    component: HojasminadasPage,
    children: [
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },{
    path: '',
    redirectTo: '/hojasminadas/page1',
    pathMatch: 'full'
  }
]
},
{
path: '',
redirectTo: '/hojasminadas/page1',
pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasminadasPageRoutingModule {}
