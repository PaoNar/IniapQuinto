import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanosfisiologicosImagePage } from './danosfisiologicos-image.page';

const routes: Routes = [
  {
    path: '',
    component: DanosfisiologicosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanosfisiologicosImagePageRoutingModule {}
