import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmoradasImagePage } from './hojasmoradas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmoradasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmoradasImagePageRoutingModule {}
