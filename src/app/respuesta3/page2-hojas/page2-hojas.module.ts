import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page2HojasPageRoutingModule } from './page2-hojas-routing.module';

import { Page2HojasPage } from './page2-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page2HojasPageRoutingModule
  ],
  declarations: [Page2HojasPage]
})
export class Page2HojasPageModule {}
