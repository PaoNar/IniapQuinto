import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasetalloplantaImagePage } from './basetalloplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: BasetalloplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasetalloplantaImagePageRoutingModule {}
