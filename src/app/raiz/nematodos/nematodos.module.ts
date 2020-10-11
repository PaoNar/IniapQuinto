import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NematodosPageRoutingModule } from './nematodos-routing.module';

import { NematodosPage } from './nematodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NematodosPageRoutingModule
  ],
  declarations: [NematodosPage]
})
export class NematodosPageModule {}
