import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrrolamientoModalPage } from './enrrolamiento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EnrrolamientoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrrolamientoModalPageRoutingModule {}
