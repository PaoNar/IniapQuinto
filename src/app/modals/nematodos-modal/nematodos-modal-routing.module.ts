import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NematodosModalPage } from './nematodos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NematodosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NematodosModalPageRoutingModule {}
