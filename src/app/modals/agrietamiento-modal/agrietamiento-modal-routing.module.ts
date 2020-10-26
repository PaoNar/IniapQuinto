import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrietamientoModalPage } from './agrietamiento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgrietamientoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrietamientoModalPageRoutingModule {}
