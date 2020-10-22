import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciabolitasImagePage } from './presenciabolitas-image.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciabolitasImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciabolitasImagePageRoutingModule {}
