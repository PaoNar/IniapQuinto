import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CacaoPageRoutingModule } from './cacao-routing.module';

import { CacaoPage } from './cacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CacaoPageRoutingModule
  ],
  declarations: [CacaoPage]
})
export class CacaoPageModule {}
