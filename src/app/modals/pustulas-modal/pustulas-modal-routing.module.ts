import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PustulasModalPage } from './pustulas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PustulasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PustulasModalPageRoutingModule {}
