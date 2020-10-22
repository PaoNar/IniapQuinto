import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasMoradasModalPage } from './hojas-moradas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HojasMoradasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasMoradasModalPageRoutingModule {}
