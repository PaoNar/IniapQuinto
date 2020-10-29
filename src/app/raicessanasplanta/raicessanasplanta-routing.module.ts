import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaicessanasplantaPage } from './raicessanasplanta.page';

const routes: Routes = [
  {
    path: '',
    component: RaicessanasplantaPage,
    children: [

      {
        path: 'page1',
        loadChildren: () => import('./page1/page1.module').then(m => m.Page1PageModule)
      },
      {
        path: '',
        redirectTo: '/raicessanasplanta/page1',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/raicessanasplanta/page1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaicessanasplantaPageRoutingModule { }
