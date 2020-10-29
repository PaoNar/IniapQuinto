import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciabolitasraizImagePage } from './presenciabolitasraiz-image.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciabolitasraizImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciabolitasraizImagePageRoutingModule {}
