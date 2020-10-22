import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciaAgallasModalPage } from './presencia-agallas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciaAgallasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciaAgallasModalPageRoutingModule {}
