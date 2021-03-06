import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlagasPage } from './plagas.page';

const routes: Routes = [
  {
    path: '',
    component: PlagasPage, data: {breadcrumb: 'plagas'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlagasPageRoutingModule {}
