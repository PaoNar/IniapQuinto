import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalloPageRoutingModule } from './tallo-routing.module';

import { TalloPage } from './tallo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalloPageRoutingModule
  ],
  declarations: [TalloPage]
})
export class TalloPageModule {}
