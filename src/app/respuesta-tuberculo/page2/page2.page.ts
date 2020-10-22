import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarbonModalPage } from 'src/app/modals/carbon-modal/carbon-modal.page';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { DanosfisiologicosModalPage } from 'src/app/modals/danosfisiologicos-modal/danosfisiologicos-modal.page';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';
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
      component: CostraNegraModalPage
    })

    await modal.present();
  }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoBlancoModalPage
    })

    await modal.present();
  }

  async sarnapolvorientaModal(){
    const modal = await this.modalCtrl.create({
      component: SarnapolvorientaModalPage
    })

    await modal.present();
  }

  async danosfisiologicosModal(){
    const modal = await this.modalCtrl.create({
      component: DanosfisiologicosModalPage
    })

    await modal.present();
  }

}
