import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaPlantaPage } from './toda-planta.page';

const routes: Routes = [
  {
    path: '',
    component: TodaPlantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaPlantaPageRoutingModule {}
