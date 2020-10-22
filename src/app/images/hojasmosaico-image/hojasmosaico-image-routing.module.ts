import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmosaicoImagePage } from './hojasmosaico-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmosaicoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmosaicoImagePageRoutingModule {}
