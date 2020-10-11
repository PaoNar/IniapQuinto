import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaizPageRoutingModule } from './raiz-routing.module';

import { RaizPage } from './raiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaizPageRoutingModule
  ],
  declarations: [RaizPage]
})
export class RaizPageModule {}
