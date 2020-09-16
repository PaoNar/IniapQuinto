import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuberculosPageRoutingModule } from './tuberculos-routing.module';

import { TuberculosPage } from './tuberculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuberculosPageRoutingModule
  ],
  declarations: [TuberculosPage]
})
export class TuberculosPageModule {}
