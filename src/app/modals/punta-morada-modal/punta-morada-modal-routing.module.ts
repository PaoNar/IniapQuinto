import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntaMoradaModalPage } from './punta-morada-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PuntaMoradaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntaMoradaModalPageRoutingModule {}
