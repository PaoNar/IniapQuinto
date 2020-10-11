import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrietamientoPage } from './agrietamiento.page';

const routes: Routes = [
  {
    path: '',
    component: AgrietamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrietamientoPageRoutingModule {}
