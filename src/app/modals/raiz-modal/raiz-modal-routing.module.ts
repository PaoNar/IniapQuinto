import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaizModalPage } from './raiz-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RaizModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaizModalPageRoutingModule {}
