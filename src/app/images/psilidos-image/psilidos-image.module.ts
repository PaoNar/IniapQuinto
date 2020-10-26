import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsilidosImagePageRoutingModule } from './psilidos-image-routing.module';

import { PsilidosImagePage } from './psilidos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsilidosImagePageRoutingModule
  ],
  declarations: [PsilidosImagePage]
})
export class PsilidosImagePageModule {}
