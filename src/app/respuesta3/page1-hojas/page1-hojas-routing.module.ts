import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1HojasPage } from './page1-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Page1HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1HojasPageRoutingModule {}
