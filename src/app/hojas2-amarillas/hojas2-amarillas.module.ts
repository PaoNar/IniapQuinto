import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hojas2AmarillasPageRoutingModule } from './hojas2-amarillas-routing.module';

import { Hojas2AmarillasPage } from './hojas2-amarillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hojas2AmarillasPageRoutingModule
  ],
  declarations: [Hojas2AmarillasPage]
})
export class Hojas2AmarillasPageModule {}
