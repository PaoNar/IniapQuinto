import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasAmarillasModalPage } from './hojas-amarillas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HojasAmarillasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasAmarillasModalPageRoutingModule {}
