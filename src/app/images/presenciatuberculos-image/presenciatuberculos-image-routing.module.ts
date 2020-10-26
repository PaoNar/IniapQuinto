import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciatuberculosImagePage } from './presenciatuberculos-image.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciatuberculosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciatuberculosImagePageRoutingModule {}
