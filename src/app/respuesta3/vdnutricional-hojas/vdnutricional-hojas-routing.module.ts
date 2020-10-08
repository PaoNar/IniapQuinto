import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VdnutricionalHojasPage } from './vdnutricional-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: VdnutricionalHojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VdnutricionalHojasPageRoutingModule {}
