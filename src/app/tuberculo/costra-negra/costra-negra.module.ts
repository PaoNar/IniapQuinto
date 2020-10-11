import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostraNegraPageRoutingModule } from './costra-negra-routing.module';

import { CostraNegraPage } from './costra-negra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostraNegraPageRoutingModule
  ],
  declarations: [CostraNegraPage]
})
export class CostraNegraPageModule {}
