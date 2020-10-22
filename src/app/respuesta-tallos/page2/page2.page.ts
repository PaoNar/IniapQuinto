import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CostraNegraModalPage } from 'src/app/modals/costra-negra-modal/costra-negra-modal.page';
import { LanchaModalPage } from 'src/app/modals/lancha-modal/lancha-modal.page';
import { PienegroModalPage } from 'src/app/modals/pienegro-modal/pienegro-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { PuntaMoradaModalPage } from 'src/app/modals/punta-morada-modal/punta-morada-modal.page';
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

  async lanchaModal(){
    const modal = await this.modalCtrl.create({
      component: LanchaModalPage
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

  async puntamoradaModal(){
    const modal = await this.modalCtrl.create({
      component: PuntaMoradaModalPage
    })

    await modal.present();
  }

}
