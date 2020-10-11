import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulguillaPageRoutingModule } from './pulguilla-routing.module';

import { PulguillaPage } from './pulguilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulguillaPageRoutingModule
  ],
  declarations: [PulguillaPage]
})
export class PulguillaPageModule {}
