import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyaImagePage } from './roya-image.page';

const routes: Routes = [
  {
    path: '',
    component: RoyaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyaImagePageRoutingModule {}
