import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulguillaImagePage } from './pulguilla-image.page';

const routes: Routes = [
  {
    path: '',
    component: PulguillaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulguillaImagePageRoutingModule {}
