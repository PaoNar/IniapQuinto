import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PienegroPage } from './pienegro.page';

const routes: Routes = [
  {
    path: '',
    component: PienegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PienegroPageRoutingModule {}
