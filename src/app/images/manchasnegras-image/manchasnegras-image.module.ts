import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchasnegrasImagePageRoutingModule } from './manchasnegras-image-routing.module';

import { ManchasnegrasImagePage } from './manchasnegras-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchasnegrasImagePageRoutingModule
  ],
  declarations: [ManchasnegrasImagePage]
})
export class ManchasnegrasImagePageModule {}
