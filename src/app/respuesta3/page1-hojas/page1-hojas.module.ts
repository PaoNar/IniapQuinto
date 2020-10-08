import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1HojasPageRoutingModule } from './page1-hojas-routing.module';

import { Page1HojasPage } from './page1-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1HojasPageRoutingModule
  ],
  declarations: [Page1HojasPage]
})
export class Page1HojasPageModule {}
