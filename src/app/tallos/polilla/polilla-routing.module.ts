import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolillaPage } from './polilla.page';

const routes: Routes = [
  {
    path: '',
    component: PolillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolillaPageRoutingModule {}
