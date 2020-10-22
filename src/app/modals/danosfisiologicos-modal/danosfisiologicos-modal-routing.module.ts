import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanosfisiologicosModalPage } from './danosfisiologicos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DanosfisiologicosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanosfisiologicosModalPageRoutingModule {}
