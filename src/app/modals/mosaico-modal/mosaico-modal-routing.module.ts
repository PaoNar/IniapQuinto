import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MosaicoModalPage } from './mosaico-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MosaicoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MosaicoModalPageRoutingModule {}
