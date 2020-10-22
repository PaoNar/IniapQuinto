import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NematodosModalPageRoutingModule } from './nematodos-modal-routing.module';

import { NematodosModalPage } from './nematodos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NematodosModalPageRoutingModule
  ],
  declarations: [NematodosModalPage]
})
export class NematodosModalPageModule {}
