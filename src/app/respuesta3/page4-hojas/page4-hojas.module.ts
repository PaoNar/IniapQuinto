import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page4HojasPageRoutingModule } from './page4-hojas-routing.module';

import { Page4HojasPage } from './page4-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page4HojasPageRoutingModule
  ],
  declarations: [Page4HojasPage]
})
export class Page4HojasPageModule {}
