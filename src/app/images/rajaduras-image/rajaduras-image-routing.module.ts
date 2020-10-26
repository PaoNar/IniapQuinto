import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajadurasImagePage } from './rajaduras-image.page';

const routes: Routes = [
  {
    path: '',
    component: RajadurasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajadurasImagePageRoutingModule {}
