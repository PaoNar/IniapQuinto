import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulgonesModalPage } from './pulgones-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PulgonesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulgonesModalPageRoutingModule {}
