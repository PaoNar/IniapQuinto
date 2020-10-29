import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmanchasplantaImagePage } from './hojasmanchasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmanchasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmanchasplantaImagePageRoutingModule {}
