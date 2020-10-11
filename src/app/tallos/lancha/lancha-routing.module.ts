import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanchaPage } from './lancha.page';

const routes: Routes = [
  {
    path: '',
    component: LanchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanchaPageRoutingModule {}
