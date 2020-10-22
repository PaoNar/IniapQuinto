import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasamarillasImagePage } from './hojasamarillas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasamarillasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasamarillasImagePageRoutingModule {}
