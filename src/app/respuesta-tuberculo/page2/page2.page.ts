import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarbonImagePage } from 'src/app/images/carbon-image/carbon-image.page';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { DanosfisiologicosImagePage } from 'src/app/images/danosfisiologicos-image/danosfisiologicos-image.page';
import { GusanoblancoImagePage } from 'src/app/images/gusanoblanco-image/gusanoblanco-image.page';
import { PienegroImagePage } from 'src/app/images/pienegro-image/pienegro-image.page';
import { PolillaImagePage } from 'src/app/images/polilla-image/polilla-image.page';
import { SarnapolvorientaImagePage } from 'src/app/images/sarnapolvorienta-image/sarnapolvorienta-image.page';
import { CarbonModalPage } from 'src/app/modals/carbon-modal/carbon-modal.page';
import { CostranegraModalPage } from 'src/app/modals/costranegra-modal/costranegra-modal.page';
import { GusanoblancoModalPage } from 'src/app/modals/gusanoblanco-modal/gusanoblanco-modal.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { SarnapolvorientaModalPage } from 'src/app/modals/sarnapolvorienta-modal/sarnapolvorienta-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  async carbonModal(){
    const modal = await this.modalCtrl.create({
      component: CarbonModalPage
    })

    await modal.present();
  }


  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }


  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostranegraModalPage
    })

    await modal.present();
  }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoModalPage
    })

    await modal.present();
  }

  async sarnapolvorientaModal(){
    const modal = await this.modalCtrl.create({
      component: SarnapolvorientaModalPage
    })

    await modal.present();
  }

  

  // Imagenes
  async carbonImage(){
    const modal = await this.modalCtrl.create({
      component: CarbonImagePage
    })

    await modal.present();
  }


  async polillaImage(){
    const modal = await this.modalCtrl.create({
      component: PolillaImagePage
    })

    await modal.present();
  }

  async pienegroImage(){
    const modal = await this.modalCtrl.create({
      component: PienegroImagePage
    })

    await modal.present();
  }


  async costranegraImage(){
    const modal = await this.modalCtrl.create({
      component: CostranegraImagePage
    })

    await modal.present();
  }

  async gusanoblancoImage(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoImagePage
    })

    await modal.present();
  }

  async sarnapolvorientaImage(){
    const modal = await this.modalCtrl.create({
      component: SarnapolvorientaImagePage
    })

    await modal.present();
  }

  async danosfisiologicosImage(){
    const modal = await this.modalCtrl.create({
      component: DanosfisiologicosImagePage
    })

    await modal.present();
  }

}
