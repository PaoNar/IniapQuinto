import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajadurasPage } from './rajaduras.page';

const routes: Routes = [
  {
    path: '',
    component: RajadurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajadurasPageRoutingModule {}
