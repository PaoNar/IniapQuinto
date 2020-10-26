import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuberculoImagePage } from './tuberculo-image.page';

const routes: Routes = [
  {
    path: '',
    component: TuberculoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuberculoImagePageRoutingModule {}
