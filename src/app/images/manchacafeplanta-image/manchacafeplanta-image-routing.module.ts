import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManchacafeplantaImagePage } from './manchacafeplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: ManchacafeplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManchacafeplantaImagePageRoutingModule {}
