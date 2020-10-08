import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PienegroHojasPage } from './pienegro-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: PienegroHojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PienegroHojasPageRoutingModule {}
