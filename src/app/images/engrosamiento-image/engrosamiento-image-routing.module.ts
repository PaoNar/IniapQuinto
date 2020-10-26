import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngrosamientoImagePage } from './engrosamiento-image.page';

const routes: Routes = [
  {
    path: '',
    component: EngrosamientoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngrosamientoImagePageRoutingModule {}
