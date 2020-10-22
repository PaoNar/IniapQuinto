import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsilidosModalPageRoutingModule } from './psilidos-modal-routing.module';

import { PsilidosModalPage } from './psilidos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsilidosModalPageRoutingModule
  ],
  declarations: [PsilidosModalPage]
})
export class PsilidosModalPageModule {}
