import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NematodosImagePageRoutingModule } from './nematodos-image-routing.module';

import { NematodosImagePage } from './nematodos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NematodosImagePageRoutingModule
  ],
  declarations: [NematodosImagePage]
})
export class NematodosImagePageModule {}
