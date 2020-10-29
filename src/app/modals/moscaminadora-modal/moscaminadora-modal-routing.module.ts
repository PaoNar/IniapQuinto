import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoscaminadoraModalPage } from './moscaminadora-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MoscaminadoraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoscaminadoraModalPageRoutingModule {}
