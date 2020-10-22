import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PienegroModalPage } from './pienegro-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PienegroModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PienegroModalPageRoutingModule {}
