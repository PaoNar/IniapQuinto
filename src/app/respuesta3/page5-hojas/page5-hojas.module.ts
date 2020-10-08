import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page5HojasPageRoutingModule } from './page5-hojas-routing.module';

import { Page5HojasPage } from './page5-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page5HojasPageRoutingModule
  ],
  declarations: [Page5HojasPage]
})
export class Page5HojasPageModule {}
