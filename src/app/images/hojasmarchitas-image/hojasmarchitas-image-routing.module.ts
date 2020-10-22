import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmarchitasImagePage } from './hojasmarchitas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmarchitasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmarchitasImagePageRoutingModule {}
