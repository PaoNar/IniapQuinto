import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuecostalloImagePage } from './huecostallo-image.page';

const routes: Routes = [
  {
    path: '',
    component: HuecostalloImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuecostalloImagePageRoutingModule {}
