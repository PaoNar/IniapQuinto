import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuecosModalPage } from './huecos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HuecosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuecosModalPageRoutingModule {}
