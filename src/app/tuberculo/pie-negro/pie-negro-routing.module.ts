import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PieNegroPage } from './pie-negro.page';

const routes: Routes = [
  {
    path: '',
    component: PieNegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PieNegroPageRoutingModule {}
