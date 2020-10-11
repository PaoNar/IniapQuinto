import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostraNegraPage } from './costra-negra.page';

const routes: Routes = [
  {
    path: '',
    component: CostraNegraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostraNegraPageRoutingModule {}
