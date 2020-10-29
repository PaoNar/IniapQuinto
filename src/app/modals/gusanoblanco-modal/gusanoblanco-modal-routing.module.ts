import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GusanoblancoModalPage } from './gusanoblanco-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GusanoblancoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GusanoblancoModalPageRoutingModule {}
