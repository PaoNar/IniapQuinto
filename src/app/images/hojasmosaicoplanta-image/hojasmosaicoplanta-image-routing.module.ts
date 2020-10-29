import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmosaicoplantaImagePage } from './hojasmosaicoplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmosaicoplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmosaicoplantaImagePageRoutingModule {}
