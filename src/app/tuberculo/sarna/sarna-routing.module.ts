import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarnaPage } from './sarna.page';

const routes: Routes = [
  {
    path: '',
    component: SarnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SarnaPageRoutingModule {}
