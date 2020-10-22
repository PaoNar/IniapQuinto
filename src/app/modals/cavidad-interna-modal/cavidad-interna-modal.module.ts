import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CavidadInternaModalPageRoutingModule } from './cavidad-interna-modal-routing.module';

import { CavidadInternaModalPage } from './cavidad-interna-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CavidadInternaModalPageRoutingModule
  ],
  declarations: [CavidadInternaModalPage]
})
export class CavidadInternaModalPageModule {}
