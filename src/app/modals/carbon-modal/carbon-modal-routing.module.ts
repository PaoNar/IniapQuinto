import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbonModalPage } from './carbon-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CarbonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarbonModalPageRoutingModule {}
