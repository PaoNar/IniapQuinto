import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostranegraModalPage } from './costranegra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CostranegraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostranegraModalPageRoutingModule {}
