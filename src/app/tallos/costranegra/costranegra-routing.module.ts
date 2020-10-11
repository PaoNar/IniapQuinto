import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostranegraPage } from './costranegra.page';

const routes: Routes = [
  {
    path: '',
    component: CostranegraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostranegraPageRoutingModule {}
