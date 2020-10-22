import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmanchasImagePage } from './hojasmanchas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmanchasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmanchasImagePageRoutingModule {}
