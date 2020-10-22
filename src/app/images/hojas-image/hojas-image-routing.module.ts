import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasImagePage } from './hojas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasImagePageRoutingModule {}
