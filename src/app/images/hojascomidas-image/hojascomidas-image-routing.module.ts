import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojascomidasImagePage } from './hojascomidas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojascomidasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojascomidasImagePageRoutingModule {}
