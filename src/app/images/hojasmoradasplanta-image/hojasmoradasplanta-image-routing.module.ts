import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmoradasplantaImagePage } from './hojasmoradasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmoradasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmoradasplantaImagePageRoutingModule {}
