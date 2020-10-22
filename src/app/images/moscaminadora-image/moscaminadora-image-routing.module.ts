import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoscaminadoraImagePage } from './moscaminadora-image.page';

const routes: Routes = [
  {
    path: '',
    component: MoscaminadoraImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoscaminadoraImagePageRoutingModule {}
