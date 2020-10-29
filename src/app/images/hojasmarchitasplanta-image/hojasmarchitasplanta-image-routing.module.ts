import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmarchitasplantaImagePage } from './hojasmarchitasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmarchitasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmarchitasplantaImagePageRoutingModule {}
