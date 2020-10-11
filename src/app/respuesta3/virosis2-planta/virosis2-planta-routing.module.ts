import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Virosis2PlantaPage } from './virosis2-planta.page';

const routes: Routes = [
  {
    path: '',
    component: Virosis2PlantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Virosis2PlantaPageRoutingModule {}
