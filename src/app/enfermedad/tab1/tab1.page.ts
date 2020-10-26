import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HojasImagePage } from 'src/app/images/hojas-image/hojas-image.page';
import { InsectosImagePage } from 'src/app/images/insectos-image/insectos-image.page';
import { PlantaImagePage } from 'src/app/images/planta-image/planta-image.page';
import { RaizImagePage } from 'src/app/images/raiz-image/raiz-image.page';
import { TallosImagePage } from 'src/app/images/tallos-image/tallos-image.page';
import { TuberculoImagePage } from 'src/app/images/tuberculo-image/tuberculo-image.page';
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

  // imagenes

  async plantaImage(){
    const modal = await this.modalCtrl.create({
      component: PlantaImagePage
    })
    await modal.present();
  }

  async hojasImage(){
    const modal = await this.modalCtrl.create({
      component: HojasImagePage
    })
    await modal.present();
  }

  async talloImage(){
    const modal = await this.modalCtrl.create({
      component: TallosImagePage
    })

    await modal.present();
  }

  async tuberculoImage(){
    const modal = await this.modalCtrl.create({
      component: TuberculoImagePage
    })

    await modal.present();
  }


  async raizImage(){
    const modal = await this.modalCtrl.create({
      component: RaizImagePage
    })
    await modal.present();
  }
  

  async insectosImage(){
    const modal = await this.modalCtrl.create({
      component: InsectosImagePage
    })
    await modal.present();
  }

  
}
