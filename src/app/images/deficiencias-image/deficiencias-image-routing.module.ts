import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeficienciasImagePage } from './deficiencias-image.page';

const routes: Routes = [
  {
    path: '',
    component: DeficienciasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeficienciasImagePageRoutingModule {}
