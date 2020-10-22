import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GusanoblancoImagePage } from './gusanoblanco-image.page';

const routes: Routes = [
  {
    path: '',
    component: GusanoblancoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GusanoblancoImagePageRoutingModule {}
