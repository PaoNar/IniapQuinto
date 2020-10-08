import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3HojasPage } from './page3-hojas.page';

const routes: Routes = [
  {
    path: '',
    component: Page3HojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3HojasPageRoutingModule {}
