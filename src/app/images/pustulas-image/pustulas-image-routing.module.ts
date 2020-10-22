import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PustulasImagePage } from './pustulas-image.page';

const routes: Routes = [
  {
    path: '',
    component: PustulasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PustulasImagePageRoutingModule {}
