import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoscaMinadoraPageRoutingModule } from './mosca-minadora-routing.module';

import { MoscaMinadoraPage } from './mosca-minadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoscaMinadoraPageRoutingModule
  ],
  declarations: [MoscaMinadoraPage]
})
export class MoscaMinadoraPageModule {}
