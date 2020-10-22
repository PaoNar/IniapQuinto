import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseTalloModalPage } from './base-tallo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BaseTalloModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseTalloModalPageRoutingModule {}
