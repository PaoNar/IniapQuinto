import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VnematodosPageRoutingModule } from './vnematodos-routing.module';

import { VnematodosPage } from './vnematodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VnematodosPageRoutingModule
  ],
  declarations: [VnematodosPage]
})
export class VnematodosPageModule {}
