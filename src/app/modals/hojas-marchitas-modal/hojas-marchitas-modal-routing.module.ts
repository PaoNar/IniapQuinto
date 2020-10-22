import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasMarchitasModalPage } from './hojas-marchitas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HojasMarchitasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasMarchitasModalPageRoutingModule {}
