import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchasPlateadoModalPage } from './manchas-plateado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ManchasPlateadoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchasPlateadoModalPageRoutingModule {}
