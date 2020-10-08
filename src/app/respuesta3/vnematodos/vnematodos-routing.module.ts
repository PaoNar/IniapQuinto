import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VnematodosPage } from './vnematodos.page';

const routes: Routes = [
  {
    path: '',
    component: VnematodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VnematodosPageRoutingModule {}
