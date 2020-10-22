import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchasplateadoImagePage } from './manchasplateado-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchasplateadoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchasplateadoImagePageRoutingModule {}
