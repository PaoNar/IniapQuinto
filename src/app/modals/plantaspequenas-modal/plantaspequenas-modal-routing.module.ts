import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaspequenasModalPage } from './plantaspequenas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaspequenasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaspequenasModalPageRoutingModule {}
