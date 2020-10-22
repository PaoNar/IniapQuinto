import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciaBolitasModalPage } from './presencia-bolitas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciaBolitasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciaBolitasModalPageRoutingModule {}
