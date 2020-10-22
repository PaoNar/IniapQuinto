import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoscaMinadoraModalPage } from './mosca-minadora-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MoscaMinadoraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoscaMinadoraModalPageRoutingModule {}
