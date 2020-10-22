import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaspequenasImagePage } from './plantaspequenas-image.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaspequenasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaspequenasImagePageRoutingModule {}
