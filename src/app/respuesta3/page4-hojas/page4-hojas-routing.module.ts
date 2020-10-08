import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4HojasPage } from './page4-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Page4HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4HojasPageRoutingModule {}
