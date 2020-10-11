import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyaPageRoutingModule } from './roya-routing.module';

import { RoyaPage } from './roya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyaPageRoutingModule
  ],
  declarations: [RoyaPage]
})
export class RoyaPageModule {}
