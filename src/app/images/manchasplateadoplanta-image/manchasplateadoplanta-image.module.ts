import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchasplateadoplantaImagePageRoutingModule } from './manchasplateadoplanta-image-routing.module';

import { ManchasplateadoplantaImagePage } from './manchasplateadoplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchasplateadoplantaImagePageRoutingModule
  ],
  declarations: [ManchasplateadoplantaImagePage]
})
export class ManchasplateadoplantaImagePageModule {}
