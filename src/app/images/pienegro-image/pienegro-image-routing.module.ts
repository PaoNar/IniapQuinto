import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PienegroImagePage } from './pienegro-image.page';

const routes: Routes = [
  {
    path: '',
    component: PienegroImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PienegroImagePageRoutingModule {}
