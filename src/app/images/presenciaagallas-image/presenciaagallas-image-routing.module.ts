import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciaagallasImagePage } from './presenciaagallas-image.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciaagallasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciaagallasImagePageRoutingModule {}
