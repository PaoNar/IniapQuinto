import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeficienciasnutricionalesModalPage } from './deficienciasnutricionales-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DeficienciasnutricionalesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeficienciasnutricionalesModalPageRoutingModule {}
