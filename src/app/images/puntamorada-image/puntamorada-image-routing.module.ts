import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntamoradaImagePage } from './puntamorada-image.page';

const routes: Routes = [
  {
    path: '',
    component: PuntamoradaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntamoradaImagePageRoutingModule {}
