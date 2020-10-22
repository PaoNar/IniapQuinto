import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PudricionModalPage } from './pudricion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PudricionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PudricionModalPageRoutingModule {}
