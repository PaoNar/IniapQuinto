import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorazonhuecoModalPageRoutingModule } from './corazonhueco-modal-routing.module';

import { CorazonhuecoModalPage } from './corazonhueco-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorazonhuecoModalPageRoutingModule
  ],
  declarations: [CorazonhuecoModalPage]
})
export class CorazonhuecoModalPageModule {}
