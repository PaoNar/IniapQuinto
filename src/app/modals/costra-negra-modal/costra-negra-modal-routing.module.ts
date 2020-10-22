import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostraNegraModalPage } from './costra-negra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CostraNegraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostraNegraModalPageRoutingModule {}
