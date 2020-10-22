import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojasmordidasImagePage } from './hojasmordidas-image.page';

const routes: Routes = [
  {
    path: '',
    component: HojasmordidasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasmordidasImagePageRoutingModule {}
