import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnrrollamientoImagePage } from 'src/app/images/enrrollamiento-image/enrrollamiento-image.page';
import { HojasamarillasImagePage } from 'src/app/images/hojasamarillas-image/hojasamarillas-image.page';
import { HojasmanchasImagePage } from 'src/app/images/hojasmanchas-image/hojasmanchas-image.page';
import { HojasmarchitasImagePage } from 'src/app/images/hojasmarchitas-image/hojasmarchitas-image.page';
import { HojasmoradasImagePage } from 'src/app/images/hojasmoradas-image/hojasmoradas-image.page';
import { HojasmosaicoImagePage } from 'src/app/images/hojasmosaico-image/hojasmosaico-image.page';
import { PlantaspequenasImagePage } from 'src/app/images/plantaspequenas-image/plantaspequenas-image.page';
import { EnrrolamientoModalPage } from 'src/app/Modals/enrrolamiento-modal/enrrolamiento-modal.page';
import { HojasAmarillasModalPage } from 'src/app/modals/hojas-amarillas-modal/hojas-amarillas-modal.page';
import { HojasManchasPage } from 'src/app/modals/hojas-manchas/hojas-manchas.page';
import { HojasMarchitasModalPage } from 'src/app/modals/hojas-marchitas-modal/hojas-marchitas-modal.page';
import { HojasMoradasModalPage } from 'src/app/modals/hojas-moradas-modal/hojas-moradas-modal.page';
import { MosaicoModalPage } from 'src/app/modals/mosaico-modal/mosaico-modal.page';
import { PlantaspequenasModalPage } from 'src/app/modals/plantaspequenas-modal/plantaspequenas-modal.page';
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

  // imagenes

  async hojasmanchaImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmanchasImagePage
    })

    await modal.present();
  }

  async hojasmoradasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmoradasImagePage
    })

    await modal.present();
  }


  async hojasamarillasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasamarillasImagePage
    })

    await modal.present();
  }

  async hojasmarchitasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmarchitasImagePage
    })

    await modal.present();
  }

  async hojasmosaicoImage(){
    const modal = await this.modalCtrl.create({
      component: HojasmosaicoImagePage
    })
    await modal.present();
  }

  async enrrollamientoImage(){
    const modal = await this.modalCtrl.create({
      component: EnrrollamientoImagePage
    })
    await modal.present();
  }

  async plantaspequenasImage(){
    const modal = await this.modalCtrl.create({
      component: PlantaspequenasImagePage
    })
    await modal.present();
  }

}
