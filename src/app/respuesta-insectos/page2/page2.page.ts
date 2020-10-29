import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GusanoblancoImagePage } from 'src/app/images/gusanoblanco-image/gusanoblanco-image.page';
import { PolillaImagePage } from 'src/app/images/polilla-image/polilla-image.page';
import { PsilidosImagePage } from 'src/app/images/psilidos-image/psilidos-image.page';
import { PulgonesImagePage } from 'src/app/images/pulgones-image/pulgones-image.page';
import { GusanoblancoModalPage } from 'src/app/modals/gusanoblanco-modal/gusanoblanco-modal.page';
import { PolillaModalPage } from 'src/app/modals/polilla-modal/polilla-modal.page';
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
      component: GusanoblancoModalPage
    })

    await modal.present();
  }

  async polillaModal(){
    const modal = await this.modalCtrl.create({
      component: PolillaModalPage
    })

    await modal.present();
  }


  async pulgonesModal(){
    const modal = await this.modalCtrl.create({
      component: PulgonesModalPage
    })

    await modal.present();
  }

  // Imagenes

  async gusanoblancoImage(){
    const modal = await this.modalCtrl.create({
      component: GusanoblancoImagePage
    })

    await modal.present();
  }

  async polillaImage(){
    const modal = await this.modalCtrl.create({
      component: PolillaImagePage
    })

    await modal.present();
  }


  async psilidosImage(){
    const modal = await this.modalCtrl.create({
      component: PsilidosImagePage
    })

    await modal.present();
  }

  async pulgonesImage(){
    const modal = await this.modalCtrl.create({
      component: PulgonesImagePage
    })

    await modal.present();
  }

}
