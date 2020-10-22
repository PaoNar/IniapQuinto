import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchaNegraModalPage } from './mancha-negra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ManchaNegraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchaNegraModalPageRoutingModule {}
