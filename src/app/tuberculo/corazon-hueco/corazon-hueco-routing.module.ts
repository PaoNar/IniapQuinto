import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorazonHuecoPage } from './corazon-hueco.page';

const routes: Routes = [
  {
    path: '',
    component: CorazonHuecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorazonHuecoPageRoutingModule {}
