import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajadurasModalPage } from './rajaduras-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RajadurasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajadurasModalPageRoutingModule {}
