import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasMinadasModalPage } from './hojas-minadas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HojasMinadasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasMinadasModalPageRoutingModule {}
