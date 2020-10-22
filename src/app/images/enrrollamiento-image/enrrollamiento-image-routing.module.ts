import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrrollamientoImagePage } from './enrrollamiento-image.page';

const routes: Routes = [
  {
    path: '',
    component: EnrrollamientoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrrollamientoImagePageRoutingModule {}
