import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrrollamientoplantaImagePage } from './enrrollamientoplanta-image.page';

const routes: Routes = [
  {
    path: '',
    component: EnrrollamientoplantaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrrollamientoplantaImagePageRoutingModule {}
