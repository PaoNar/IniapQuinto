import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasAmarillasPageRoutingModule } from './hojas-amarillas-routing.module';

import { HojasAmarillasPage } from './hojas-amarillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasAmarillasPageRoutingModule
  ],
  declarations: [HojasAmarillasPage]
})
export class HojasAmarillasPageModule {}
