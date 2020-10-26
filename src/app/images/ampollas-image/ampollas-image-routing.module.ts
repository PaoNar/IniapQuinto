import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmpollasImagePage } from './ampollas-image.page';

const routes: Routes = [
  {
    path: '',
    component: AmpollasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmpollasImagePageRoutingModule {}
