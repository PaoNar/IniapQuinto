import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchaCafeModalPage } from './mancha-cafe-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ManchaCafeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchaCafeModalPageRoutingModule {}
