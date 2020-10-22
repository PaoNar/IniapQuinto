import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsectosModalPageRoutingModule } from './insectos-modal-routing.module';

import { InsectosModalPage } from './insectos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsectosModalPageRoutingModule
  ],
  declarations: [InsectosModalPage]
})
export class InsectosModalPageModule {}
