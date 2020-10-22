import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanchaImagePage } from './lancha-image.page';

const routes: Routes = [
  {
    path: '',
    component: LanchaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanchaImagePageRoutingModule {}
