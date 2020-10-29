import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoscaminadoraModalPageRoutingModule } from './moscaminadora-modal-routing.module';

import { MoscaminadoraModalPage } from './moscaminadora-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoscaminadoraModalPageRoutingModule
  ],
  declarations: [MoscaminadoraModalPage]
})
export class MoscaminadoraModalPageModule {}
