import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntaMorada2PageRoutingModule } from './punta-morada2-routing.module';

import { PuntaMorada2Page } from './punta-morada2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntaMorada2PageRoutingModule
  ],
  declarations: [PuntaMorada2Page]
})
export class PuntaMorada2PageModule {}
