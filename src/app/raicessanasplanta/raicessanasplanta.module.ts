import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaicessanasplantaPageRoutingModule } from './raicessanasplanta-routing.module';

import { RaicessanasplantaPage } from './raicessanasplanta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaicessanasplantaPageRoutingModule
  ],
  declarations: [RaicessanasplantaPage]
})
export class RaicessanasplantaPageModule {}
