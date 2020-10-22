import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseTalloModalPageRoutingModule } from './base-tallo-modal-routing.module';

import { BaseTalloModalPage } from './base-tallo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseTalloModalPageRoutingModule
  ],
  declarations: [BaseTalloModalPage]
})
export class BaseTalloModalPageModule {}
