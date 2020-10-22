import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasMordidasModalPage } from './hojas-mordidas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HojasMordidasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasMordidasModalPageRoutingModule {}
