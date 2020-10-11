import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Virosis2PageRoutingModule } from './virosis2-routing.module';

import { Virosis2Page } from './virosis2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Virosis2PageRoutingModule
  ],
  declarations: [Virosis2Page]
})
export class Virosis2PageModule {}
