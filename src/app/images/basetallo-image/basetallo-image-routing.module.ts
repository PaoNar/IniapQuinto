import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasetalloImagePage } from './basetallo-image.page';

const routes: Routes = [
  {
    path: '',
    component: BasetalloImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasetalloImagePageRoutingModule {}
