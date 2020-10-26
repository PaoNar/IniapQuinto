import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorazonhuecoModalPage } from './corazonhueco-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CorazonhuecoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorazonhuecoModalPageRoutingModule {}
