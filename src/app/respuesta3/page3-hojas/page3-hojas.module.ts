import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page3HojasPageRoutingModule } from './page3-hojas-routing.module';

import { Page3HojasPage } from './page3-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3HojasPageRoutingModule
  ],
  declarations: [Page3HojasPage]
})
export class Page3HojasPageModule {}
