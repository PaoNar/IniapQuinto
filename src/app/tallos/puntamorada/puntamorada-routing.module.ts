import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntamoradaPage } from './puntamorada.page';

const routes: Routes = [
  {
    path: '',
    component: PuntamoradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntamoradaPageRoutingModule {}
