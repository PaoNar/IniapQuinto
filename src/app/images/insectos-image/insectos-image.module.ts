import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsectosImagePageRoutingModule } from './insectos-image-routing.module';

import { InsectosImagePage } from './insectos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsectosImagePageRoutingModule
  ],
  declarations: [InsectosImagePage]
})
export class InsectosImagePageModule {}
