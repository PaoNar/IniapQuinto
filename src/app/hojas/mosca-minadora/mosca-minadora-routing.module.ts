import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoscaMinadoraPage } from './mosca-minadora.page';

const routes: Routes = [
  {
    path: '',
    component: MoscaMinadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoscaMinadoraPageRoutingModule {}
