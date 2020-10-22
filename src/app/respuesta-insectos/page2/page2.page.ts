import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoBlancoModalPage } from 'src/app/Modals/gusano-blanco-modal/gusano-blanco-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
import { PsilidosModalPage } from 'src/app/modals/psilidos-modal/psilidos-modal.page';
import { PulgonesModalPage } from 'src/app/modals/pulgones-modal/pulgones-modal.page';
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
    
  async gusanoblancoModal(){
    const modal = await this.modalCtrl.create({
      component: GusanoBlancoModalPage
    })

    await modal.present();
  }

  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }


  async psilidosModal(){
    const modal = await this.modalCtrl.create({
      component: PsilidosModalPage
    })

    await modal.present();
  }

  async pulgonesModal(){
    const modal = await this.modalCtrl.create({
      component: PulgonesModalPage
    })

    await modal.present();
  }

}
