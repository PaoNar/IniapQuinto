import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuecosPageRoutingModule } from './huecos-routing.module';

import { HuecosPage } from './huecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuecosPageRoutingModule
  ],
  declarations: [HuecosPage]
})
export class HuecosPageModule {}
