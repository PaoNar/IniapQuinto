import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyaModalPage } from './roya-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RoyaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyaModalPageRoutingModule {}
