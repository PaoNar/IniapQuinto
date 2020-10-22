import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GusanoBlancoModalPage } from './gusano-blanco-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GusanoBlancoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GusanoBlancoModalPageRoutingModule {}
