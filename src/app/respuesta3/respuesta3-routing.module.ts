import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Respuesta3Page } from './respuesta3.page';

const routes: Routes = [
  {
    path: '',
    component: Respuesta3Page,
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
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: '',
    redirectTo: '/respuesta3/page1',
    pathMatch: 'full'
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  },
  {
    path: 'vdnutricional',
    loadChildren: () => import('./vdnutricional/vdnutricional.module').then( m => m.VDnutricionalPageModule)
  },
  {
    path: 'pienegro',
    loadChildren: () => import('./pienegro/pienegro.module').then( m => m.PienegroPageModule)
  },
  {
    path: 'heladas',
    loadChildren: () => import('./heladas/heladas.module').then( m => m.HeladasPageModule)
  }
 ],
},
{
  path: '',
  redirectTo: '/respuesta3/page1',
  pathMatch: 'full'
}, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Respuesta3PageRoutingModule {}
