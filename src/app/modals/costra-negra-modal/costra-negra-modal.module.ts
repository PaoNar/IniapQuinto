import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostraNegraModalPageRoutingModule } from './costra-negra-modal-routing.module';

import { CostraNegraModalPage } from './costra-negra-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostraNegraModalPageRoutingModule
  ],
  declarations: [CostraNegraModalPage]
})
export class CostraNegraModalPageModule {}
