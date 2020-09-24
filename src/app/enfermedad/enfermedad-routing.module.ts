import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfermedadPage } from './enfermedad.page';

const routes: Routes = [
  {
    path: '',
    component: EnfermedadPage,
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
  // {
  //   path: 'pregunta3',
  //   loadChildren: () => import('./pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  // },
  // {
  //   path: 'pregunta2',
  //   loadChildren: () => import('./pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  // },
  // {
  //   path: 'modal',
  //   loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfermedadPageRoutingModule {}
