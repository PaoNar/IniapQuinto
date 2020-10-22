import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciaTuberculosModalPageRoutingModule } from './presencia-tuberculos-modal-routing.module';

import { PresenciaTuberculosModalPage } from './presencia-tuberculos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciaTuberculosModalPageRoutingModule
  ],
  declarations: [PresenciaTuberculosModalPage]
})
export class PresenciaTuberculosModalPageModule {}
