import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { ModalPageModule } from '../modal/modal.module';
import { ModalPage } from '../modal/modal.page';

@NgModule({


  entryComponents: [
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    ModalPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
