import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntamoradaModalPage } from './puntamorada-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PuntamoradaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntamoradaModalPageRoutingModule {}
