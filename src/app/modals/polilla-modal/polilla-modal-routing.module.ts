import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolillaModalPage } from './polilla-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PolillaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolillaModalPageRoutingModule {}
