import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirosisPage } from './virosis.page';

const routes: Routes = [
  {
    path: '',
    component: VirosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirosisPageRoutingModule {}
