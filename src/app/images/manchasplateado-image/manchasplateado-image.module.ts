import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchasplateadoImagePageRoutingModule } from './manchasplateado-image-routing.module';

import { ManchasplateadoImagePage } from './manchasplateado-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchasplateadoImagePageRoutingModule
  ],
  declarations: [ManchasplateadoImagePage]
})
export class ManchasplateadoImagePageModule {}
