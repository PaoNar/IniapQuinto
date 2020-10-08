import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeladasHojasPage } from './heladas-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: HeladasHojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeladasHojasPageRoutingModule {}
