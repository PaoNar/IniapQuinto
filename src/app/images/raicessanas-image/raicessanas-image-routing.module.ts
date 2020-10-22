import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaicessanasImagePage } from './raicessanas-image.page';

const routes: Routes = [
  {
    path: '',
    component: RaicessanasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaicessanasImagePageRoutingModule {}
