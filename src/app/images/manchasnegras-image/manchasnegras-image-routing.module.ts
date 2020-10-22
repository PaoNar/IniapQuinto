import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchasnegrasImagePage } from './manchasnegras-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchasnegrasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchasnegrasImagePageRoutingModule {}
