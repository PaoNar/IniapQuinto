import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorazonhuecoImagePageRoutingModule } from './corazonhueco-image-routing.module';

import { CorazonhuecoImagePage } from './corazonhueco-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorazonhuecoImagePageRoutingModule
  ],
  declarations: [CorazonhuecoImagePage]
})
export class CorazonhuecoImagePageModule {}
