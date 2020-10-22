import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulgonesImagePage } from './pulgones-image.page';

const routes: Routes = [
  {
    path: '',
    component: PulgonesImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulgonesImagePageRoutingModule {}
