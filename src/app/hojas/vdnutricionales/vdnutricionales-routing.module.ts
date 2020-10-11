import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VdnutricionalesPage } from './vdnutricionales.page';

const routes: Routes = [
  {
    path: '',
    component: VdnutricionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VdnutricionalesPageRoutingModule {}
