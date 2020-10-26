import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuecosImagePage } from './huecos-image.page';

const routes: Routes = [
  {
    path: '',
    component: HuecosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuecosImagePageRoutingModule {}
