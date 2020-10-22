import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsModalPage } from './trips-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TripsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsModalPageRoutingModule {}
