import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2HojasPage } from './page2-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Page2HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2HojasPageRoutingModule {}
