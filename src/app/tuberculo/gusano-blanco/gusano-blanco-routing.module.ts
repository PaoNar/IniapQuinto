import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GusanoBlancoPage } from './gusano-blanco.page';

const routes: Routes = [
  {
    path: '',
    component: GusanoBlancoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GusanoBlancoPageRoutingModule {}
