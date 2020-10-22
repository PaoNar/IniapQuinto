import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuberculoPageRoutingModule } from './tuberculo-routing.module';

import { TuberculoPage } from './tuberculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuberculoPageRoutingModule
  ],
  declarations: [TuberculoPage]
})
export class TuberculoPageModule {}
