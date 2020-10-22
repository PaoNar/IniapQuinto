import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchaCafeModalPageRoutingModule } from './mancha-cafe-modal-routing.module';

import { ManchaCafeModalPage } from './mancha-cafe-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchaCafeModalPageRoutingModule
  ],
  declarations: [ManchaCafeModalPage]
})
export class ManchaCafeModalPageModule {}
