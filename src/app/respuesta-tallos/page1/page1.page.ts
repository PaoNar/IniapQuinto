import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EngrosamientoImagePage } from 'src/app/images/engrosamiento-image/engrosamiento-image.page';
import { HuecostalloImagePage } from 'src/app/images/huecostallo-image/huecostallo-image.page';
import { ManchacafeImagePage } from 'src/app/images/manchacafe-image/manchacafe-image.page';
import { ManchasnegrasImagePage } from 'src/app/images/manchasnegras-image/manchasnegras-image.page';
import { PresenciatuberculosImagePage } from 'src/app/images/presenciatuberculos-image/presenciatuberculos-image.page';
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

  async manchanegraImage(){
    const modal = await this.modalCtrl.create({
      component: ManchasnegrasImagePage
    })

    await modal.present();
  }


  async manchacafeImage(){
    const modal = await this.modalCtrl.create({
      component: ManchacafeImagePage
    })

    await modal.present();
  }

  async engrosamientoImage(){
    const modal = await this.modalCtrl.create({
      component: EngrosamientoImagePage
    })

    await modal.present();
  }


  async presenciatuberculosImage(){
    const modal = await this.modalCtrl.create({
      component: PresenciatuberculosImagePage
    })

    await modal.present();
  }

  async huecostalloImage(){
    const modal = await this.modalCtrl.create({
      component: HuecostalloImagePage
    })

    await modal.present();
  }

}
