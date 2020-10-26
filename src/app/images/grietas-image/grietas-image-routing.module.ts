import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrietasImagePage } from './grietas-image.page';

const routes: Routes = [
  {
    path: '',
    component: GrietasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrietasImagePageRoutingModule {}
