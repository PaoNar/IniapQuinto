import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuecosPage } from './huecos.page';

const routes: Routes = [
  {
    path: '',
    component: HuecosPage,
    children: [
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },{
    path: '',
    redirectTo: '/huecos/page1',
    pathMatch: 'full'
  }
]
},
{
path: '',
redirectTo: '/huecos/page1',
pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuecosPageRoutingModule {}
