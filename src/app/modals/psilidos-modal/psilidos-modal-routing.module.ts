import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsilidosModalPage } from './psilidos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PsilidosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsilidosModalPageRoutingModule {}
