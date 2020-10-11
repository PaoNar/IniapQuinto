import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntaMorada2Page } from './punta-morada2.page';

const routes: Routes = [
  {
    path: '',
    component: PuntaMorada2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntaMorada2PageRoutingModule {}
