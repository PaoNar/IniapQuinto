import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchacafeImagePage } from './manchacafe-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchacafeImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchacafeImagePageRoutingModule {}
