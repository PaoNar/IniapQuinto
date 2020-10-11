import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolillaPageRoutingModule } from './polilla-routing.module';

import { PolillaPage } from './polilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolillaPageRoutingModule
  ],
  declarations: [PolillaPage]
})
export class PolillaPageModule {}
