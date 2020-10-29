import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PustulasplantaImagePageRoutingModule } from './pustulasplanta-image-routing.module';

import { PustulasplantaImagePage } from './pustulasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PustulasplantaImagePageRoutingModule
  ],
  declarations: [PustulasplantaImagePage]
})
export class PustulasplantaImagePageModule {}
