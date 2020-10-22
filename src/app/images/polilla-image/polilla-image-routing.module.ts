import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolillaImagePage } from './polilla-image.page';

const routes: Routes = [
  {
    path: '',
    component: PolillaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolillaImagePageRoutingModule {}
