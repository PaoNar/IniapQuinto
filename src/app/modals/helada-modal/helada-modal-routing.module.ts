import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeladaModalPage } from './helada-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HeladaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeladaModalPageRoutingModule {}
