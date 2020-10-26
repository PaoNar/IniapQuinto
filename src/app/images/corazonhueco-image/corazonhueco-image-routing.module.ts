import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorazonhuecoImagePage } from './corazonhueco-image.page';

const routes: Routes = [
  {
    path: '',
    component: CorazonhuecoImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorazonhuecoImagePageRoutingModule {}
