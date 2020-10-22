import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostranegraImagePage } from './costranegra-image.page';

const routes: Routes = [
  {
    path: '',
    component: CostranegraImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostranegraImagePageRoutingModule {}
