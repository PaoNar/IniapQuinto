import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasminadasImagePage } from './hojasminadas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasminadasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasminadasImagePageRoutingModule {}
