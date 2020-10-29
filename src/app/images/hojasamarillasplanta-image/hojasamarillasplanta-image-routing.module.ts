import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasamarillasplantaImagePage } from './hojasamarillasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasamarillasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasamarillasplantaImagePageRoutingModule {}
