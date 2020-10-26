import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CavidadinternaImagePage } from './cavidadinterna-image.page';

const routes: Routes = [
  {
    path: '',
    component: CavidadinternaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CavidadinternaImagePageRoutingModule {}
