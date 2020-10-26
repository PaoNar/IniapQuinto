import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaizImagePage } from './raiz-image.page';

const routes: Routes = [
  {
    path: '',
    component: RaizImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaizImagePageRoutingModule {}
