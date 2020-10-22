import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasPage } from './hojas.page';

const routes: Routes = [
  {
    path: '',
    component: HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasPageRoutingModule {}
