import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PustulasplantaImagePage } from './pustulasplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: PustulasplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PustulasplantaImagePageRoutingModule {}
