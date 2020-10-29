import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchasnegrasplantaImagePageRoutingModule } from './manchasnegrasplanta-image-routing.module';

import { ManchasnegrasplantaImagePage } from './manchasnegrasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchasnegrasplantaImagePageRoutingModule
  ],
  declarations: [ManchasnegrasplantaImagePage]
})
export class ManchasnegrasplantaImagePageModule {}
