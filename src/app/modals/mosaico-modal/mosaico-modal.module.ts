import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosaicoModalPageRoutingModule } from './mosaico-modal-routing.module';

import { MosaicoModalPage } from './mosaico-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MosaicoModalPageRoutingModule
  ],
  declarations: [MosaicoModalPage]
})
export class MosaicoModalPageModule {}
