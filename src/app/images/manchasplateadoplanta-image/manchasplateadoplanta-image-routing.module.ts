import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchasplateadoplantaImagePage } from './manchasplateadoplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchasplateadoplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchasplateadoplantaImagePageRoutingModule {}
