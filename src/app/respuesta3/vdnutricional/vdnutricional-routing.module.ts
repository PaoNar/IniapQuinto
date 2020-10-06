import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VDnutricionalPage } from './vdnutricional.page';

const routes: Routes = [
  {
    path: '',
    component: VDnutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VDnutricionalPageRoutingModule {}
