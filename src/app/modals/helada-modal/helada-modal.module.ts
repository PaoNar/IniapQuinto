import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeladaModalPageRoutingModule } from './helada-modal-routing.module';

import { HeladaModalPage } from './helada-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeladaModalPageRoutingModule
  ],
  declarations: [HeladaModalPage]
})
export class HeladaModalPageModule {}
