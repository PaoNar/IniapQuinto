import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaicesSanasModalPage } from './raices-sanas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RaicesSanasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaicesSanasModalPageRoutingModule {}
