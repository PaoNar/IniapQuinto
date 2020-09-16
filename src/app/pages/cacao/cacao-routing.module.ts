import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacaoPage } from './cacao.page';

const routes: Routes = [
  {
    path: '',
    component: CacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CacaoPageRoutingModule {}
