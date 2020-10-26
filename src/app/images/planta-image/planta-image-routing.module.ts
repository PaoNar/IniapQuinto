import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantaImagePage } from './planta-image.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaImagePageRoutingModule {}
