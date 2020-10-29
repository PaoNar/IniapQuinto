import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchacafeplantaImagePageRoutingModule } from './manchacafeplanta-image-routing.module';

import { ManchacafeplantaImagePage } from './manchacafeplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchacafeplantaImagePageRoutingModule
  ],
  declarations: [ManchacafeplantaImagePage]
})
export class ManchacafeplantaImagePageModule {}
