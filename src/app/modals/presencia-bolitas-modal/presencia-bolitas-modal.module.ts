import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciaBolitasModalPageRoutingModule } from './presencia-bolitas-modal-routing.module';

import { PresenciaBolitasModalPage } from './presencia-bolitas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciaBolitasModalPageRoutingModule
  ],
  declarations: [PresenciaBolitasModalPage]
})
export class PresenciaBolitasModalPageModule {}
