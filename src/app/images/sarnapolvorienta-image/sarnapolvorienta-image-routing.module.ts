import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarnapolvorientaImagePage } from './sarnapolvorienta-image.page';

const routes: Routes = [
  {
    path: '',
    component: SarnapolvorientaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SarnapolvorientaImagePageRoutingModule {}
