import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrietasModalPageRoutingModule } from './grietas-modal-routing.module';

import { GrietasModalPage } from './grietas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrietasModalPageRoutingModule
  ],
  declarations: [GrietasModalPage]
})
export class GrietasModalPageModule {}
