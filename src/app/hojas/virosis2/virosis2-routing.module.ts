import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Virosis2Page } from './virosis2.page';

const routes: Routes = [
  {
    path: '',
    component: Virosis2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Virosis2PageRoutingModule {}
