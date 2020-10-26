import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsilidosImagePage } from './psilidos-image.page';

const routes: Routes = [
  {
    path: '',
    component: PsilidosImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsilidosImagePageRoutingModule {}
