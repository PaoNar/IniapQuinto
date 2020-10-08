import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page5HojasPage } from './page5-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Page5HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page5HojasPageRoutingModule {}
