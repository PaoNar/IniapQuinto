import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrrollamientoplantaImagePageRoutingModule } from './enrrollamientoplanta-image-routing.module';

import { EnrrollamientoplantaImagePage } from './enrrollamientoplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrrollamientoplantaImagePageRoutingModule
  ],
  declarations: [EnrrollamientoplantaImagePage]
})
export class EnrrollamientoplantaImagePageModule {}
