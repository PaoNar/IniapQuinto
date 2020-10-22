import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeladaImagePage } from './helada-image.page';

const routes: Routes = [
  {
    path: '',
    component: HeladaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeladaImagePageRoutingModule {}
