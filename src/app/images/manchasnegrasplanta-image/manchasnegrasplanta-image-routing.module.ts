import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchasnegrasplantaImagePage } from './manchasnegrasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchasnegrasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchasnegrasplantaImagePageRoutingModule {}
