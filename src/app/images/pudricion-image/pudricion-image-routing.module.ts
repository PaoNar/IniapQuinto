import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PudricionImagePage } from './pudricion-image.page';

const routes: Routes = [
  {
    path: '',
    component: PudricionImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PudricionImagePageRoutingModule {}
