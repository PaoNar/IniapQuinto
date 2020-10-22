import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmpollasModalPage } from 'src/app/modals/ampollas-modal/ampollas-modal.page';
import { CavidadInternaModalPage } from 'src/app/modals/cavidad-interna-modal/cavidad-interna-modal.page';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { GrietasModalPage } from 'src/app/modals/grietas-modal/grietas-modal.page';
import { HuecosModalPage } from 'src/app/modals/huecos-modal/huecos-modal.page';
import { PresenciaAgallasModalPage } from 'src/app/modals/presencia-agallas-modal/presencia-agallas-modal.page';
import { PudricionModalPage } from 'src/app/modals/pudricion-modal/pudricion-modal.page';
import { RajadurasModalPage } from 'src/app/modals/rajaduras-modal/rajaduras-modal.page';
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


  async huecosModal(){
    const modal = await this.modalCtrl.create({
      component: HuecosModalPage
    })

    await modal.present();
  }

  async pudricionModal(){
    const modal = await this.modalCtrl.create({
      component: PudricionModalPage
    })

    await modal.present();
  }


  async presenciaagallasModal(){
    const modal = await this.modalCtrl.create({
      component: PresenciaAgallasModalPage
    })

    await modal.present();
  }

  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostraNegraModalPage
    })

    await modal.present();
  }


  async ampollasModal(){
    const modal = await this.modalCtrl.create({
      component: AmpollasModalPage
    })
    await modal.present();
  }
  

  async grietasModal(){
    const modal = await this.modalCtrl.create({
      component: GrietasModalPage
    })
    await modal.present();
  }

  async cavidadModal(){
    const modal = await this.modalCtrl.create({
      component: CavidadInternaModalPage
    })
    await modal.present();
  }
  

  async rajadurasModal(){
    const modal = await this.modalCtrl.create({
      component: RajadurasModalPage
    })
    await modal.present();
  }

}
