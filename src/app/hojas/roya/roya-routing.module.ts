import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoyaPage } from './roya.page';

const routes: Routes = [
  {
    path: '',
    component: RoyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoyaPageRoutingModule {}
