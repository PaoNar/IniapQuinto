import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VDnutricionalPageRoutingModule } from './vdnutricional-routing.module';

import { VDnutricionalPage } from './vdnutricional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VDnutricionalPageRoutingModule
  ],
  declarations: [VDnutricionalPage]
})
export class VDnutricionalPageModule {}
