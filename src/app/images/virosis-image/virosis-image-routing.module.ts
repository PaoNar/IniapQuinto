import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirosisImagePage } from './virosis-image.page';

const routes: Routes = [
  {
    path: '',
    component: VirosisImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirosisImagePageRoutingModule {}
