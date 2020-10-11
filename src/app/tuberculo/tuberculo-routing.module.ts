import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuberculoPage } from './tuberculo.page';

const routes: Routes = [
  {
    path: '',
    component: TuberculoPage,
    children: [
  {
    path: 'gusano-blanco',
    loadChildren: () => import('./gusano-blanco/gusano-blanco.module').then( m => m.GusanoBlancoPageModule)
  },
  {
    path: 'pie-negro',
    loadChildren: () => import('./pie-negro/pie-negro.module').then( m => m.PieNegroPageModule)
  },
  {
    path: 'carbon',
    loadChildren: () => import('./carbon/carbon.module').then( m => m.CarbonPageModule)
  },
  {
    path: 'costra-negra',
    loadChildren: () => import('./costra-negra/costra-negra.module').then( m => m.CostraNegraPageModule)
  },
  {
    path: 'sarna',
    loadChildren: () => import('./sarna/sarna.module').then( m => m.SarnaPageModule)
  },
  {
    path: 'agrietamiento',
    loadChildren: () => import('./agrietamiento/agrietamiento.module').then( m => m.AgrietamientoPageModule)
  },
  {
    path: 'corazon-hueco',
    loadChildren: () => import('./corazon-hueco/corazon-hueco.module').then( m => m.CorazonHuecoPageModule)
  },
  {
    path: 'rajaduras',
    loadChildren: () => import('./rajaduras/rajaduras.module').then( m => m.RajadurasPageModule)
  },
  {
    path: '',
    redirectTo: '/tuberculo/page1',
    pathMatch: 'full'
  }
 ]
},
{
path: '',
redirectTo: '/tuberculo/page1',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuberculoPageRoutingModule {}
