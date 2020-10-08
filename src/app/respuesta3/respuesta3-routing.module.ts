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
  },  
  {
    path: 'vnematodos',
    loadChildren: () => import('./vnematodos/vnematodos.module').then( m => m.VnematodosPageModule)
  },
  {
    path: 'nematodos',
    loadChildren: () => import('./nematodos/nematodos.module').then( m => m.NematodosPageModule)
  },
  {
    path: 'virosis',
    loadChildren: () => import('./virosis/virosis.module').then( m => m.VirosisPageModule)
  },
  {
    path: 'page1-hojas',
    loadChildren: () => import('./page1-hojas/page1-hojas.module').then( m => m.Page1HojasPageModule)
  },
  {
    path: 'page2-hojas',
    loadChildren: () => import('./page2-hojas/page2-hojas.module').then( m => m.Page2HojasPageModule)
  },
  {
    path: 'page3-hojas',
    loadChildren: () => import('./page3-hojas/page3-hojas.module').then( m => m.Page3HojasPageModule)
  },
  {
    path: 'page4-hojas',
    loadChildren: () => import('./page4-hojas/page4-hojas.module').then( m => m.Page4HojasPageModule)
  },
  {
    path: 'page5-hojas',
    loadChildren: () => import('./page5-hojas/page5-hojas.module').then( m => m.Page5HojasPageModule)
  },
  {
    path: 'vdnutricional-hojas',
    loadChildren: () => import('./vdnutricional-hojas/vdnutricional-hojas.module').then( m => m.VdnutricionalHojasPageModule)
  },
  {
    path: 'pienegro-hojas',
    loadChildren: () => import('./pienegro-hojas/pienegro-hojas.module').then( m => m.PienegroHojasPageModule)
  },
  {
    path: 'heladas-hojas',
    loadChildren: () => import('./heladas-hojas/heladas-hojas.module').then( m => m.HeladasHojasPageModule)
  }
 ],
},
{
  path: '',
  redirectTo: '/respuesta3/page1',
  pathMatch: 'full'
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Respuesta3PageRoutingModule {}
