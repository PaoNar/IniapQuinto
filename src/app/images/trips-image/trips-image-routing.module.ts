import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsImagePage } from './trips-image.page';

const routes: Routes = [
  {
    path: '',
    component: TripsImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsImagePageRoutingModule {}
