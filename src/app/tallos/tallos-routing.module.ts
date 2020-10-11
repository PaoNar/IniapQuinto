import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallosPage } from './tallos.page';

const routes: Routes = [
  {
    path: '',
    component: TallosPage,
    children: [
  {
    path: 'pienegro',
    loadChildren: () => import('./pienegro/pienegro.module').then( m => m.PienegroPageModule)
  },
  {
    path: 'lancha',
    loadChildren: () => import('./lancha/lancha.module').then( m => m.LanchaPageModule)
  },
  {
    path: 'puntamorada',
    loadChildren: () => import('./puntamorada/puntamorada.module').then( m => m.PuntamoradaPageModule)
  },
  {
    path: 'costranegra',
    loadChildren: () => import('./costranegra/costranegra.module').then( m => m.CostranegraPageModule)
  },
  {
    path: 'polilla',
    loadChildren: () => import('./polilla/polilla.module').then( m => m.PolillaPageModule)
  },
  {
    path: '',
    redirectTo: '/tallos/page1',
    pathMatch: 'full'
  }
 ]
},
{
path: '',
redirectTo: '/tallos/page1',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallosPageRoutingModule {}
