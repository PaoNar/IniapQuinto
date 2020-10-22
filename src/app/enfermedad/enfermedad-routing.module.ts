import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfermedadPage } from './enfermedad.page';

const routes: Routes = [
  {
    path: '',
    component: EnfermedadPage, data: {breadcrumb: 'enfermedadtabs'},
    children: [
    {
      path: 'tab1',
      loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
    },
    {
      path: 'tab2',
      loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
    },
    {
      path: '',
      redirectTo: '/enfermedad/tab1',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/enfermedad/tab1',
  pathMatch: 'full'
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfermedadPageRoutingModule {}
