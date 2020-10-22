import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanchaModalPageRoutingModule } from './lancha-modal-routing.module';

import { LanchaModalPage } from './lancha-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanchaModalPageRoutingModule
  ],
  declarations: [LanchaModalPage]
})
export class LanchaModalPageModule {}
