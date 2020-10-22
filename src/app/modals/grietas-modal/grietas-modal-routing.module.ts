import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrietasModalPage } from './grietas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GrietasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrietasModalPageRoutingModule {}
