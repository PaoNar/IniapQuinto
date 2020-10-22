import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalloPage } from './tallo.page';

const routes: Routes = [
  {
    path: '',
    component: TalloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalloPageRoutingModule {}
