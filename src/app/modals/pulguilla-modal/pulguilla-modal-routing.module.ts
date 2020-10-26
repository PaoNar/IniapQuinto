import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulguillaModalPage } from './pulguilla-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PulguillaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulguillaModalPageRoutingModule {}
