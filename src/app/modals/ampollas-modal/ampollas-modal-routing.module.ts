import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmpollasModalPage } from './ampollas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AmpollasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmpollasModalPageRoutingModule {}
