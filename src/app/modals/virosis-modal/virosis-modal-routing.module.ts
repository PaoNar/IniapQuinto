import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirosisModalPage } from './virosis-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VirosisModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirosisModalPageRoutingModule {}
