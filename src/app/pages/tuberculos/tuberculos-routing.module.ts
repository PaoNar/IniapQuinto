import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuberculosPage } from './tuberculos.page';

const routes: Routes = [
  {
    path: '',
    component: TuberculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuberculosPageRoutingModule {}
