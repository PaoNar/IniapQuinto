import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchacafeImagePageRoutingModule } from './manchacafe-image-routing.module';

import { ManchacafeImagePage } from './manchacafe-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchacafeImagePageRoutingModule
  ],
  declarations: [ManchacafeImagePage]
})
export class ManchacafeImagePageModule {}
