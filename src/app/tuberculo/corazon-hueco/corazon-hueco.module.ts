import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorazonHuecoPageRoutingModule } from './corazon-hueco-routing.module';

import { CorazonHuecoPage } from './corazon-hueco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorazonHuecoPageRoutingModule
  ],
  declarations: [CorazonHuecoPage]
})
export class CorazonHuecoPageModule {}
