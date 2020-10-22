import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngrosamientoModalPageRoutingModule } from './engrosamiento-modal-routing.module';

import { EngrosamientoModalPage } from './engrosamiento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngrosamientoModalPageRoutingModule
  ],
  declarations: [EngrosamientoModalPage]
})
export class EngrosamientoModalPageModule {}
