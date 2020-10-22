import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarnapolvorientaModalPage } from './sarnapolvorienta-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SarnapolvorientaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SarnapolvorientaModalPageRoutingModule {}
