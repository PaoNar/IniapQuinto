import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntaMoradaPage } from './punta-morada.page';

const routes: Routes = [
  {
    path: '',
    component: PuntaMoradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntaMoradaPageRoutingModule {}
