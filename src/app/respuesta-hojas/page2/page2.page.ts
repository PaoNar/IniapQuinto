import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';
import { HeladaModalPage } from 'src/app/modals/helada-modal/helada-modal.page';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { MoscaMinadoraModalPage } from 'src/app/modals/mosca-minadora-modal/mosca-minadora-modal.page';
import { NematodosModalPage } from 'src/app/Modals/nematodos-modal/nematodos-modal.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { PuntaMoradaModalPage } from 'src/app/modals/punta-morada-modal/punta-morada-modal.page';
import { RoyaModalPage } from 'src/app/modals/roya-modal/roya-modal.page';
import { TripsModalPage } from 'src/app/modals/trips-modal/trips-modal.page';
import { VirosisModalPage } from 'src/app/modals/virosis-modal/virosis-modal.page';
import { VariablesService } from 'src/app/servicios/variables.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(public nombre: VariablesService,
    private modalCtrl: ModalController) {
    
    }

    ngOnInit(): void {
      
    }
    
  async royaModal(){
    const modal = await this.modalCtrl.create({
      component: RoyaModalPage
    })

    await modal.present();
  }

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
    })

    await modal.present();
  }


  async tripsModal(){
    const modal = await this.modalCtrl.create({
      component: TripsModalPage
    })

    await modal.present();
  }

  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoBlancoModalPage
    })

    await modal.present();
  }

  async moscaminadoraModal(){
    const modal = await this.modalCtrl.create({
      component: MoscaMinadoraModalPage
    })

    await modal.present();
  }


  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }

  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
    })

    await modal.present();
  }

  async pienegroModal(){
    const modal = await this.modalCtrl.create({
      component: PienegroModalPage
    })

    await modal.present();
  }


  async heladaModal(){
    const modal = await this.modalCtrl.create({
      component: HeladaModalPage
    })

    await modal.present();
  }

  async costranegraModal(){
    const modal = await this.modalCtrl.create({
      component: CostraNegraModalPage
    })

    await modal.present();
  }

  async nematodosModal(){
    const modal = await this.modalCtrl.create({
      component: NematodosModalPage
    })

    await modal.present();
  }


  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntaMoradaModalPage
    })

    await modal.present();
  }

}
