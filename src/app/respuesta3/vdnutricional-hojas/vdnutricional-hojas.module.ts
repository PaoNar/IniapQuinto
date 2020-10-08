import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdnutricionalHojasPageRoutingModule } from './vdnutricional-hojas-routing.module';

import { VdnutricionalHojasPage } from './vdnutricional-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdnutricionalHojasPageRoutingModule
  ],
  declarations: [VdnutricionalHojasPage]
})
export class VdnutricionalHojasPageModule {}
