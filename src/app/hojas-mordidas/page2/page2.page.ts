import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';
import { MoscaMinadoraModalPage } from 'src/app/modals/mosca-minadora-modal/mosca-minadora-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
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
    
  async virosisModal(){
    const modal = await this.modalCtrl.create({
      component: VirosisModalPage
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

}
