import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeladasPageRoutingModule } from './heladas-routing.module';

import { HeladasPage } from './heladas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeladasPageRoutingModule
  ],
  declarations: [HeladasPage]
})
export class HeladasPageModule {}
