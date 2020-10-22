import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasImagePage } from 'src/app/images/hojas-image/hojas-image.page';
import { HojasPage } from 'src/app/Modals/hojas/hojas.page';
import { InsectosModalPage } from 'src/app/modals/insectos-modal/insectos-modal.page';
import { RaizModalPage } from 'src/app/modals/raiz-modal/raiz-modal.page';
import { TalloPage } from 'src/app/Modals/tallo/tallo.page';
import { TodaPlantaPage } from 'src/app/Modals/toda-planta/toda-planta.page';
import { TuberculoPage } from 'src/app/modals/tuberculo/tuberculo.page';
import { VariablesService } from '../../servicios/variables.service';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public nombre: VariablesService, 
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }


  async todalaPlantaModal(){
    const modal = await this.modalCtrl.create({
      component: TodaPlantaPage
    })

    await modal.present();
  }

  async hojasModal(){
    const modal = await this.modalCtrl.create({
      component: HojasPage
    })

    await modal.present();
  }


  async talloModal(){
    const modal = await this.modalCtrl.create({
      component: TalloPage
    })

    await modal.present();
  }

  async tuberculoModal(){
    const modal = await this.modalCtrl.create({
      component: TuberculoPage
    })

    await modal.present();
  }


  async raizModal(){
    const modal = await this.modalCtrl.create({
      component: RaizModalPage
    })
    await modal.present();
  }
  

  async insectosModal(){
    const modal = await this.modalCtrl.create({
      component: InsectosModalPage
    })
    await modal.present();
  }


  // imagenes

  async plantaImage(){
    const modal = await this.modalCtrl.create({
      component: HojasImagePage
    })
    await modal.present();
  }

  
}
