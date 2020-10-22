import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NematodosImagePage } from './nematodos-image.page';

const routes: Routes = [
  {
    path: '',
    component: NematodosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NematodosImagePageRoutingModule {}
