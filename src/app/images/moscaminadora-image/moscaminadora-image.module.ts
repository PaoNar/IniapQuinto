import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoscaminadoraImagePageRoutingModule } from './moscaminadora-image-routing.module';

import { MoscaminadoraImagePage } from './moscaminadora-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoscaminadoraImagePageRoutingModule
  ],
  declarations: [MoscaminadoraImagePage]
})
export class MoscaminadoraImagePageModule {}
