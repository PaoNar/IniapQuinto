import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmpollasImagePage } from 'src/app/images/ampollas-image/ampollas-image.page';
import { CavidadinternaImagePage } from 'src/app/images/cavidadinterna-image/cavidadinterna-image.page';
import { CorazonhuecoImagePage } from 'src/app/images/corazonhueco-image/corazonhueco-image.page';
import { CostranegraImagePage } from 'src/app/images/costranegra-image/costranegra-image.page';
import { GrietasImagePage } from 'src/app/images/grietas-image/grietas-image.page';
import { HuecosImagePage } from 'src/app/images/huecos-image/huecos-image.page';
import { PresenciaagallasImagePage } from 'src/app/images/presenciaagallas-image/presenciaagallas-image.page';
import { PudricionImagePage } from 'src/app/images/pudricion-image/pudricion-image.page';
import { RajadurasImagePage } from 'src/app/images/rajaduras-image/rajaduras-image.page';
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


  
  // Imagenes

  async huecosImage(){
    const modal = await this.modalCtrl.create({
      component: HuecosImagePage
    })

    await modal.present();
  }

  async pudricionImage(){
    const modal = await this.modalCtrl.create({
      component: PudricionImagePage
    })

    await modal.present();
  }


  async presenciaagallasImage(){
    const modal = await this.modalCtrl.create({
      component: PresenciaagallasImagePage
    })

    await modal.present();
  }

  async costranegraImage(){
    const modal = await this.modalCtrl.create({
      component: CostranegraImagePage
    })

    await modal.present();
  }


  async ampollasImage(){
    const modal = await this.modalCtrl.create({
      component: AmpollasImagePage
    })
    await modal.present();
  }
  

  async grietasImage(){
    const modal = await this.modalCtrl.create({
      component: GrietasImagePage
    })
    await modal.present();
  }

  async corazonhuecoImage(){
    const modal = await this.modalCtrl.create({
      component: CorazonhuecoImagePage
    })
    await modal.present();
  }
  

  async rajadurasImage(){
    const modal = await this.modalCtrl.create({
      component: RajadurasImagePage
    })
    await modal.present();
  }

  async cavidadImage(){
    const modal = await this.modalCtrl.create({
      component: CavidadinternaImagePage
    })
    await modal.present();
  }

}
