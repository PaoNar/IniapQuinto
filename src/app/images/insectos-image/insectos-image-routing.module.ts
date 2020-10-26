import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsectosImagePage } from './insectos-image.page';

const routes: Routes = [
  {
    path: '',
    component: InsectosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsectosImagePageRoutingModule {}
