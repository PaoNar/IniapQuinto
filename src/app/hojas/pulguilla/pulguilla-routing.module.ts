import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulguillaPage } from './pulguilla.page';

const routes: Routes = [
  {
    path: '',
    component: PulguillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulguillaPageRoutingModule {}
