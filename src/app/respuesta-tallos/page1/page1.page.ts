import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EngrosamientoModalPage } from 'src/app/modals/engrosamiento-modal/engrosamiento-modal.page';
import { HuecosModalPage } from 'src/app/modals/huecos-modal/huecos-modal.page';
import { ManchaCafeModalPage } from 'src/app/modals/mancha-cafe-modal/mancha-cafe-modal.page';
import { ManchaNegraModalPage } from 'src/app/modals/mancha-negra-modal/mancha-negra-modal.page';
import { PresenciaTuberculosModalPage } from 'src/app/modals/presencia-tuberculos-modal/presencia-tuberculos-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  async manchanegraModal(){
    const modal = await this.modalCtrl.create({
      component: ManchaNegraModalPage
    })

    await modal.present();
  }


  async manchacafeModal(){
    const modal = await this.modalCtrl.create({
      component: ManchaCafeModalPage
    })

    await modal.present();
  }

  async engrosamientoModal(){
    const modal = await this.modalCtrl.create({
      component: EngrosamientoModalPage
    })

    await modal.present();
  }


  async presenciatuberculosModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaTuberculosModalPage
    })

    await modal.present();
  }

  async huecosModal(){
    const modal = await this.modalCtrl.create({
      component: HuecosModalPage
    })

    await modal.present();
  }

}
